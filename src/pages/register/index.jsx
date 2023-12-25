import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RootContainer, AuthContainer } from '@/components/layouts'
import { Button, Heading, Input } from '@/components/ui'
import { EN, ID } from '@/constants/language'
import { ROUTES } from '@/constants/path-name'
import { useInput } from '@/hooks/useInput'
import { useLanguage } from '@/hooks/useLanguage'
import { register } from '@/utils/auth'
import { showErrorToaster, showSuccessToaster } from '@/utils/toast'

export const RegisterPage = () => {
  const navigate = useNavigate()
  const { language } = useLanguage()

  const [loading, setLoading] = useState(false)
  const [name, resetName, onNameChange] = useInput('')
  const [email, resetEmail, onEmailChange] = useInput('')
  const [password, resetPassword, onPasswordChange] = useInput('')
  const [confirmPassword, resetConfirmPassword, onConfirmPasswordChange] =
    useInput('')

  const handleRegister = async (e) => {
    e.preventDefault()

    setLoading(true)

    let passwordsMatch = true

    if (password !== confirmPassword) {
      passwordsMatch = false
      showErrorToaster({
        message: `${
          language === 'en' ? ID['password-mismatch'] : EN['password-mismatch']
        }`,
      })
      setLoading(false)
      return
    }

    if (passwordsMatch) {
      const { error, data } = await register({ name: name, email, password })

      if (error) {
        showErrorToaster({ message: data })
        setLoading(false)
        return
      }

      resetName()
      resetEmail()
      resetPassword()
      resetConfirmPassword()
      showSuccessToaster({
        message: `${
          language === 'en' ? ID['register-notif'] : EN['register-notif']
        }`,
      })
      setLoading(false)
      navigate(`/${ROUTES.LOGIN}`)
    }
  }

  return (
    <RootContainer className="items-center justify-center">
      <AuthContainer>
        <Heading className="mb-5 text-center">
          {language === 'en' ? ID['register-to-snap'] : EN['register-to-snap']}
        </Heading>
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-4 rounded-md border border-slate-300 bg-brand-softLight p-5 dark:border-brand-border dark:bg-brand-softDark">
          <Input
            id="name"
            label={language === 'en' ? ID.name : EN.name}
            type="text"
            value={name}
            onChange={onNameChange}
            placeholder={`${language === 'en' ? ID.eg : EN.eg} anya forger`}
          />
          <Input
            id="email"
            label={language === 'en' ? ID.email : EN.email}
            type="email"
            value={email}
            onChange={onEmailChange}
            placeholder={`${language === 'en' ? ID.eg : EN.eg} anya@gmail.com`}
          />
          <Input
            id="password"
            label={language === 'en' ? ID.password : EN.password}
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder={
              language === 'en'
                ? ID['password-placeholder']
                : EN['password-placeholder']
            }
          />
          <Input
            id="confirmPassword"
            label={
              language === 'en'
                ? ID['confirm-password']
                : EN['confirm-password']
            }
            type="password"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            placeholder={
              language === 'en'
                ? ID['password-placeholder']
                : EN['password-placeholder']
            }
          />
          <Button
            type="submit"
            color="success"
            disabled={loading}
            className="flex h-10 w-full items-center justify-center">
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              `${language === 'en' ? ID.register : EN.register}`
            )}
          </Button>
        </form>
        <div className="mt-4 rounded-md border border-slate-300 p-4 text-center text-sm dark:border-brand-border">
          <p>
            {language === 'en'
              ? ID['already-have-account']
              : EN['already-have-account']}{' '}
            <Link
              to={`/${ROUTES.LOGIN}`}
              className="cursor-pointer text-blue-600 hover:underline">
              {language === 'en' ? ID.login : EN.login}
            </Link>
          </p>
        </div>
      </AuthContainer>
    </RootContainer>
  )
}

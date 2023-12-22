import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RootContainer } from '../../components/layouts'
import { Button, Heading, Input } from '../../components/ui'
import { EN, ID } from '../../constants/language'
import { ROUTES } from '../../constants/path-name'
import { useInput } from '../../hooks/useInput'
import { useLanguage } from '../../hooks/useLanguage'
import { login, putAccessToken } from '../../utils/auth'
import { showErrorToaster } from '../../utils/toast'

export const LoginPage = () => {
  const navigate = useNavigate()
  const { language } = useLanguage()

  const [loading, setLoading] = useState(false)
  const [email, resetEmail, onEmailChange] = useInput('')
  const [password, resetPassword, onPasswordChange] = useInput('')

  const handleLogin = async (e) => {
    e.preventDefault()

    setLoading(true)

    const { error, data } = await login({ email, password })

    if (error) {
      showErrorToaster({ message: data })
      setLoading(false)
      return
    }

    putAccessToken(data?.accessToken)
    resetEmail()
    resetPassword()
    setLoading(false)
    navigate(`/${ROUTES.DASHBOARD}`)
  }

  return (
    <RootContainer className="items-center justify-center">
      <main className="w-full max-w-xs">
        <Heading className="mb-5 text-center">
          {language === 'en' ? ID['login-to-snap'] : EN['login-to-snap']}
        </Heading>
        <form
          onSubmit={handleLogin}
          className="dark:border-brand-border dark:bg-brand-softDark bg-brand-softLight flex flex-col gap-4 rounded-md border border-slate-300 p-5">
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
            placeholder="********"
          />
          <Button
            color="success"
            type="submit"
            className="flex h-10 w-full items-center justify-center">
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              `${language === 'en' ? ID.login : EN.login}`
            )}
          </Button>
        </form>
        <div className="dark:border-brand-border mt-4 rounded-md border border-slate-300 p-4 text-center text-sm">
          <p>
            {language === 'en'
              ? ID['dont-have-account']
              : EN['dont-have-account']}{' '}
            <Link
              to={`/${ROUTES.REGISTER}`}
              className="cursor-pointer text-blue-600 hover:underline">
              {language === 'en' ? ID.register : EN.register}
            </Link>
          </p>
        </div>
      </main>
    </RootContainer>
  )
}

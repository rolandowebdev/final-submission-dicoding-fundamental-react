import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RootContainer } from '../../components/layouts'
import { Button, Heading, Input } from '../../components/ui'
import { ROUTES } from '../../constants/path-name'
import { useInput } from '../../hooks/useInput'
import { register } from '../../utils/auth'
import { showErrorToaster, showSuccessToaster } from '../../utils/toast'

export const RegisterPage = () => {
  const navigate = useNavigate()
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
      showErrorToaster({ message: 'Passwords do not match' })
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
      showSuccessToaster({ message: 'User created successfully' })
      setLoading(false)
      navigate(`/${ROUTES.LOGIN}`)
    }
  }

  return (
    <RootContainer className="items-center justify-center">
      <main className="w-full max-w-xs">
        <Heading className="mb-5 text-center">Register to Snap</Heading>
        <form
          onSubmit={handleRegister}
          className="flex flex-col gap-4 rounded-md border border-slate-400 bg-slate-300 p-5 dark:border-border dark:bg-softDark">
          <Input
            id="name"
            label="Name"
            type="text"
            value={name}
            onChange={onNameChange}
            placeholder="e.g. Anya Forger"
          />
          <Input
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={onEmailChange}
            placeholder="e.g. anya@gmail.com"
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="min. 6 characters"
          />
          <Input
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
            placeholder="min. 6 characters"
          />
          <Button
            color="success"
            type="submit"
            className="flex h-10 w-full items-center justify-center">
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              'Register'
            )}
          </Button>
        </form>
        <div className="mt-4 rounded-md border border-slate-400 p-4 text-center text-sm dark:border-border">
          <p>
            Already have an account?{' '}
            <Link
              to={`/${ROUTES.LOGIN}`}
              className="cursor-pointer text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </main>
    </RootContainer>
  )
}

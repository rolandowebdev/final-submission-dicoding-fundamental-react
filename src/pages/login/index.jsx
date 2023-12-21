import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RootContainer } from '../../components/layouts'
import { Button, Heading, Input } from '../../components/ui'
import { ROUTES } from '../../constants/path-name'
import { useInput } from '../../hooks/useInput'
import { login, putAccessToken } from '../../utils/auth'
import { showErrorToaster } from '../../utils/toast'

export const LoginPage = () => {
  const navigate = useNavigate()
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
        <Heading className="mb-5 text-center">Login to Snap</Heading>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 rounded-md border border-border bg-softDark p-5">
          <Input
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={onEmailChange}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={onPasswordChange}
          />
          <Button
            color="success"
            type="submit"
            className="flex h-10 w-full items-center justify-center">
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Login'}
          </Button>
        </form>
        <div className="mt-4 rounded-md border border-border p-4 text-center text-sm">
          <p>
            Don&apos;t have an account?{' '}
            <Link
              to={`/${ROUTES.REGISTER}`}
              className="cursor-pointer text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </main>
    </RootContainer>
  )
}

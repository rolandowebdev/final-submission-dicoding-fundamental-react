import { useNavigate } from 'react-router-dom'
import { Button, Heading, Input } from '../../components/ui'
import { RootContainer } from '../../components/layouts'
import { useInput } from '../../hooks/useInput'
import { login, putAccessToken } from '../../libs/auth'
import { Link } from 'react-router-dom'

export const LoginPage = () => {
  const navigate = useNavigate()

  const [email, resetEmail, onEmailChange] = useInput('')
  const [password, resetPassword, onPasswordChange] = useInput('')

  const handleLogin = async (e) => {
    e.preventDefault()

    const { error, data } = await login({ email, password })

    if (error) console.log(error)

    putAccessToken(data.accessToken)
    resetEmail()
    resetPassword()

    navigate('/dashboard')
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
          <Button color="success" type="submit">
            Login
          </Button>
        </form>
        <div className="mt-4 rounded-md border border-border p-4 text-center text-sm">
          <p>
            Don&apos;t have an account?{' '}
            <Link
              to="/register"
              className="cursor-pointer text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </main>
    </RootContainer>
  )
}

import { Link } from 'react-router-dom'
import { RootContainer } from '../../components/layouts'
import { Button, Heading, Input } from '../../components/ui'
import { useInput } from '../../hooks/useInput'
import { register } from '../../libs/auth'

export const RegisterPage = () => {
  const [username, resetUsername, onUsernameChange] = useInput('')
  const [email, resetEmail, onEmailChange] = useInput('')
  const [password, resetPassword, onPasswordChange] = useInput('')
  const [confirmPassword, resetConfirmPassword, onConfirmPasswordChange] =
    useInput('')

  const handleLogin = async (e) => {
    e.preventDefault()

    if (confirmPassword !== password) {
      alert('Passwords do not match')
      return
    }

    const { error } = await register({ name: username, email, password })

    if (error) console.log(error)

    resetUsername()
    resetEmail()
    resetPassword()
    resetConfirmPassword()
  }

  return (
    <RootContainer className="items-center justify-center">
      <div className="w-full max-w-xs">
        <Heading className="mb-5 text-center">Register to Snap</Heading>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 rounded-md border border-border bg-softDark p-5">
          <Input
            id="username"
            label="Username"
            type="text"
            value={username}
            onChange={onUsernameChange}
          />
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
          <Input
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
          />
          <Button type="submit">Register</Button>
        </form>
        <div className="mt-4 rounded-md border border-border p-4 text-center text-sm">
          <p>
            Already have an account?{' '}
            <Link
              to="/login"
              className="cursor-pointer text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </RootContainer>
  )
}
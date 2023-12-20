import { Link } from 'react-router-dom'
import { RootContainer } from '../../components/layouts'
import { Button, Heading, Input } from '../../components/ui'
import { useInput } from '../../hooks/useInput'
import { register } from '../../utils/auth'
import { showErrorToaster, showSuccessToaster } from '../../utils/toast'

export const RegisterPage = () => {
  const [name, resetName, onNameChange] = useInput('')
  const [email, resetEmail, onEmailChange] = useInput('')
  const [password, resetPassword, onPasswordChange] = useInput('')
  const [confirmPassword, resetConfirmPassword, onConfirmPasswordChange] =
    useInput('')

  const handleLogin = async (e) => {
    e.preventDefault()

    const { error, data } = await register({ name: name, email, password })

    if (!confirmPassword) {
      showErrorToaster({ message: 'Please confirm your password' })
      return
    }

    if (confirmPassword !== password) {
      showErrorToaster({ message: 'Password do not match' })
      return
    }

    if (error) {
      showErrorToaster({ message: data })
      return
    }

    resetName()
    resetEmail()
    resetPassword()
    resetConfirmPassword()
    showSuccessToaster({ message: 'User created successfully' })
  }

  return (
    <RootContainer className="items-center justify-center">
      <main className="w-full max-w-xs">
        <Heading className="mb-5 text-center">Register to Snap</Heading>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 rounded-md border border-border bg-softDark p-5">
          <Input
            id="name"
            label="Name"
            type="text"
            value={name}
            onChange={onNameChange}
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
          <Button color="success" type="submit">
            Register
          </Button>
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
      </main>
    </RootContainer>
  )
}

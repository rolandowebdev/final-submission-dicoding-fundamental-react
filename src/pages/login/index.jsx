import { RootContainer } from '../../components/layouts'
import { Button, Input, Heading } from '../../components/ui'

export const Login = () => {
  return (
    <RootContainer className="items-center justify-center space-y-4">
      <div className="w-full max-w-xs">
        <Heading className="mb-5 text-center">Login to Snap</Heading>
        <form className="flex flex-col gap-4 rounded-md border border-border bg-softDark p-5">
          <Input id="username" label="Username" />
          <Input id="password" label="Password" type="password" />
          <Button type="submit">Login</Button>
        </form>
        <div className="mt-4 rounded-md border border-border p-4 text-center text-sm">
          <p>
            Don&apos;t have an account?{' '}
            <span className="cursor-pointer text-blue-600 hover:underline">
              Register
            </span>
          </p>
        </div>
      </div>
    </RootContainer>
  )
}

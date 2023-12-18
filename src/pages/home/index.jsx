import { useEffect, useState } from 'react'
import { Navbar, RootContainer } from '../../components/layouts'
import { Heading } from '../../components/ui'
import { getUserLogged } from '../../libs/auth'

export const HomePage = () => {
  const [user, setUser] = useState('')

  const getUser = async () => {
    const user = await getUserLogged()
    setUser(user)
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <RootContainer className="items-center">
      <Navbar />
      <main className="my-8 w-full max-w-3xl">
        <Heading className="capitalize">
          {`Hello, ${user ? user.data?.name : '...'}`}
          <span className="animate-wiggle ml-2 inline-block h-6 w-6 motion-reduce:animate-none">
            👋️
          </span>{' '}
        </Heading>
      </main>
    </RootContainer>
  )
}

import { useEffect, useState } from 'react'
import { RootContainer } from '../../components/layouts'
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
      <div className="w-full max-w-2xl">
        {user ? (
          <Heading>{`Hello, ${user.data?.name}`}</Heading>
        ) : (
          <div className="h-3 w-14 animate-pulse bg-slate-700" />
        )}
      </div>
    </RootContainer>
  )
}

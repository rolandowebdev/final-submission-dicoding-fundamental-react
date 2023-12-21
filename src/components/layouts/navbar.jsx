import { Languages, Moon } from 'lucide-react'
import { useNavigate, useRouteLoaderData } from 'react-router-dom'
import { ROUTES } from '../../constants/path-name'
import { removeAccessToken } from '../../utils/auth'
import { Button, Heading } from '../ui'
import { Modal } from './modal'

export const Navbar = () => {
  const { data } = useRouteLoaderData('user')
  const navigate = useNavigate()

  const handleLogout = () => {
    removeAccessToken()
    navigate(`/${ROUTES.LOGIN}`)
  }

  return (
    <header className="flex h-20 w-full max-w-3xl items-center justify-between border-b border-b-softDark">
      <div className="flex gap-2">
        <Heading className="capitalize">{`Hello, ${data?.name}`}</Heading>
        <span className="h-6 w-6 animate-wiggle text-3xl motion-reduce:animate-none">
          👋️
        </span>
      </div>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Button size="icon">
              <Languages />
            </Button>
          </li>
          <li>
            <Button size="icon">
              <Moon />
            </Button>
          </li>
          <li>
            <Modal
              text="Logout"
              description={`Are you sure you want to logout ${data?.name}?`}
              handleAction={handleLogout}
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}

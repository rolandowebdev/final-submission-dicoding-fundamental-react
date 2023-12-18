import { PenLine, Moon, PlusCircle, Languages } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui'
import { removeAccessToken } from '../../libs/auth'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeAccessToken()
    navigate('/login')
  }

  return (
    <header className="flex h-20 w-full max-w-3xl items-center justify-between">
      <Link to="/dashboard" className="flex items-center gap-2">
        <PenLine size={26} />
        <span className="text-2xl font-semibold">Snap</span>
      </Link>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Button size="icon">
              <PlusCircle />
            </Button>
          </li>
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
            <Button onClick={handleLogout} color="danger">
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

import { Languages, Moon } from 'lucide-react'
import { useNavigate, useRouteLoaderData } from 'react-router-dom'
import { ROUTES } from '../../constants/path-name'
import { removeAccessToken } from '../../utils/auth'
import { Button, Heading } from '../ui'
import { Modal } from './modal'
import { useTheme } from '../../hooks/useTheme'
import { useLanguage } from '../../hooks/useLanguage'
import { Sun } from 'lucide-react'
import { EN, ID } from '../../constants/language'

export const Navbar = () => {
  const navigate = useNavigate()
  const { data } = useRouteLoaderData('user')
  const { theme, setTheme } = useTheme()
  const { language, setLanguage } = useLanguage()

  const handleLogout = () => {
    removeAccessToken()
    navigate(`/${ROUTES.LOGIN}`)
  }

  return (
    <header className="dark:border-b-brand-softDark flex h-20 w-full max-w-3xl items-center justify-between border-b border-b-slate-300">
      <div className="flex gap-2">
        <Heading className="capitalize">{`${
          language === 'en' ? ID.gretting : EN.gretting
        }, ${data?.name}`}</Heading>
        <span className="h-6 w-6 animate-wiggle text-3xl motion-reduce:animate-none">
          👋️
        </span>
      </div>
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Button
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              size="icon">
              {language === 'en' ? 'EN' : 'ID'}
            </Button>
          </li>
          <li>
            <Button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              size="icon">
              {theme === 'dark' ? <Sun /> : <Moon />}
            </Button>
          </li>
          <li>
            <Modal
              text={language === 'en' ? ID.logout : EN.logout}
              description={`${
                language === 'en' ? ID['logout-message'] : EN['logout-message']
              } ${data?.name}?`}
              handleAction={handleLogout}
            />
          </li>
        </ul>
      </nav>
    </header>
  )
}

import clsx from 'clsx'
import { ChevronLeft, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, RootContainer } from '../../components/layouts'
import {
  Button,
  Heading,
  Input,
  Textarea,
  buttonVariants,
} from '../../components/ui'
import { EN, ID } from '../../constants/language'
import { ROUTES } from '../../constants/path-name'
import { useInput } from '../../hooks/useInput'
import { useLanguage } from '../../hooks/useLanguage'
import { addNote } from '../../utils/notes'
import { showErrorToaster, showSuccessToaster } from '../../utils/toast'

export const CreatePage = () => {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const [loading, setLoading] = useState(false)

  const [title, resetTitle, onTitleChange] = useInput('')
  const [body, resetBody, onBodyChange] = useInput('')

  const handleCreateNote = async (e) => {
    e.preventDefault()

    setLoading(true)

    const { error, data } = await addNote({ title, body })

    if (error) {
      showErrorToaster({ message: data })
      setLoading(false)
      return
    }

    resetTitle()
    resetBody()
    showSuccessToaster({
      message: `${language === 'en' ? ID['create-notif'] : EN['create-notif']}`,
    })
    setLoading(false)
    navigate(`/${ROUTES.DASHBOARD}`)
  }

  return (
    <RootContainer className="items-center">
      <Navbar />
      <main className="my-8 w-full max-w-3xl">
        <div className="relative">
          <Link
            to={`/${ROUTES.DASHBOARD}`}
            className={clsx(
              buttonVariants(),
              'absolute flex w-max items-center',
            )}>
            <ChevronLeft size={22} /> {language === 'en' ? ID.back : EN.back}
          </Link>
          <Heading className="text-center">
            {language === 'en' ? ID['create-note'] : EN['create-note']}
          </Heading>
        </div>
        <form
          onSubmit={handleCreateNote}
          className="dark:border-brand-border dark:bg-brand-softDark bg-brand-softLight my-5 flex flex-col gap-4 rounded-md border border-slate-300 p-5">
          <Input
            required
            id="title"
            label={language === 'en' ? ID.title : EN.title}
            type="text"
            value={title}
            onChange={onTitleChange}
          />
          <Textarea
            required
            id="body"
            label={language === 'en' ? ID.body : EN.body}
            value={body}
            onChange={onBodyChange}
          />
          <Button
            color="success"
            type="submit"
            className="flex h-10 w-full items-center justify-center">
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              `${language === 'en' ? ID.create : EN.create}`
            )}
          </Button>
        </form>
      </main>
    </RootContainer>
  )
}

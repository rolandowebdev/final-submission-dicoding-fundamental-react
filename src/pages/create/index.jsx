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
import { ROUTES } from '../../constants/path-name'
import { useInput } from '../../hooks/useInput'
import { addNote } from '../../utils/notes'
import { showErrorToaster, showSuccessToaster } from '../../utils/toast'

export const CreatePage = () => {
  const navigate = useNavigate()
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
    showSuccessToaster({ message: 'Note created successfully' })
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
            <ChevronLeft size={22} /> Back to Dashboard
          </Link>
          <Heading className="text-center">Create Note</Heading>
        </div>
        <form
          onSubmit={handleCreateNote}
          className="my-5 flex flex-col gap-4 rounded-md border border-slate-400 bg-slate-300 p-5 dark:border-border dark:bg-softDark">
          <Input
            required
            id="title"
            label="title"
            type="text"
            value={title}
            onChange={onTitleChange}
          />
          <Textarea
            required
            id="body"
            label="body"
            value={body}
            onChange={onBodyChange}
          />
          <Button
            color="success"
            type="submit"
            className="flex h-10 w-full items-center justify-center">
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Create'}
          </Button>
        </form>
      </main>
    </RootContainer>
  )
}

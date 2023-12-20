import { Navbar, RootContainer } from '../../components/layouts'
import {
  Button,
  Heading,
  Input,
  Textarea,
  buttonVariants,
} from '../../components/ui'
import { useInput } from '../../hooks/useInput'
import { addNote } from '../../utils/notes'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import clsx from 'clsx'
import { showErrorToaster, showSuccessToaster } from '../../utils/toast'

export const CreatePage = () => {
  const navigate = useNavigate()
  const [title, resetTitle, onTitleChange] = useInput('')
  const [body, resetBody, onBodyChange] = useInput('')

  const handleCreateNote = async (e) => {
    e.preventDefault()

    const { error, data } = await addNote({ title, body })

    if (error) {
      showErrorToaster({ message: data })
      return
    }

    resetTitle()
    resetBody()

    showSuccessToaster({ message: 'Note created successfully' })
    navigate('/dashboard')
  }

  return (
    <RootContainer className="items-center">
      <Navbar />
      <main className="my-8 w-full max-w-3xl">
        <div className="relative">
          <Link
            to="/dashboard"
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
          className="my-5 flex flex-col gap-4 rounded-md border border-border bg-softDark p-5">
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
          <Button color="success" type="submit">
            Create
          </Button>
        </form>
      </main>
    </RootContainer>
  )
}

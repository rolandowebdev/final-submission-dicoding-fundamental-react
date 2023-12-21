import clsx from 'clsx'
import { ChevronLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CardContainer, Navbar, RootContainer } from '../../components/layouts'
import {
  Button,
  CardNote,
  CardSkeleton,
  EmptyNotes,
  buttonVariants,
} from '../../components/ui'
import { ROUTES } from '../../constants/path-name'
import { deleteNote, getArchivedNotes, unarchiveNote } from '../../utils/notes'
import { showErrorToaster, showSuccessToaster } from '../../utils/toast'

export const ArchivedPage = () => {
  const [archivedNotes, setArchivedNotes] = useState([])
  const [loading, setLoading] = useState(true)

  const getNotes = async () => {
    const { error, data } = await getArchivedNotes()

    if (error) {
      showErrorToaster({ message: data })
      setLoading(false)
      return
    }

    setArchivedNotes(data)
    setLoading(false)
  }

  const handleDelete = async (id) => {
    await deleteNote(id)
    getNotes()
    showSuccessToaster({ message: 'Note deleted successfully' })
  }

  const handleUnarchive = async (id) => {
    await unarchiveNote(id)
    getNotes()
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <RootContainer className="items-center">
      <Navbar />
      <main className="my-8 w-full max-w-3xl">
        <article>
          <div className="mb-6 flex items-center justify-between">
            <Link
              to={`/${ROUTES.DASHBOARD}`}
              className={clsx(buttonVariants(), 'flex w-max items-center')}>
              <ChevronLeft size={22} /> Back to Dashboard
            </Link>
          </div>

          {loading ? (
            <CardContainer>
              {[...Array(3)].map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </CardContainer>
          ) : archivedNotes?.length > 0 ? (
            <CardContainer notes={archivedNotes}>
              {archivedNotes.map((note) => (
                <CardNote key={note.id} {...note} handleDelete={handleDelete}>
                  <Button
                    onClick={() => handleUnarchive(note.id)}
                    color="success"
                    size="icon">
                    Unarchive
                  </Button>
                </CardNote>
              ))}
            </CardContainer>
          ) : (
            <EmptyNotes text="List of archived notes is empty" />
          )}
        </article>
      </main>
    </RootContainer>
  )
}

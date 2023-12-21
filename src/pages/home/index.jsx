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
import { archiveNote, deleteNote, getActiveNotes } from '../../utils/notes'
import { showErrorToaster, showSuccessToaster } from '../../utils/toast'
import { ROUTES } from '../../constants/path-name'

export const HomePage = () => {
  const [activeNotes, setActiveNotes] = useState([])
  const [loading, setLoading] = useState(true)

  const getNotes = async () => {
    const { error, data } = await getActiveNotes()

    if (error) {
      showErrorToaster({ message: data })
      setLoading(false)
      return
    }

    setActiveNotes(data)
    setLoading(false)
  }

  const handleDelete = async (id) => {
    await deleteNote(id)
    getNotes()
    showSuccessToaster({ message: 'Note deleted successfully' })
  }

  const handleArchive = async (id) => {
    await archiveNote(id)
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
            <div className="flex gap-2">
              <Link to={`/${ROUTES.ARCHIVED}`} className={buttonVariants()}>
                Archived
              </Link>
              <Link to={`/${ROUTES.CREATE}`} className={buttonVariants()}>
                Create Note
              </Link>
            </div>
          </div>

          {loading ? (
            <CardContainer>
              {[...Array(3)].map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </CardContainer>
          ) : activeNotes.length > 0 ? (
            <CardContainer notes={activeNotes}>
              {activeNotes.map((note) => (
                <CardNote key={note.id} {...note} handleDelete={handleDelete}>
                  <Button
                    onClick={() => handleArchive(note.id)}
                    color="success"
                    size="icon">
                    Archive
                  </Button>
                </CardNote>
              ))}
            </CardContainer>
          ) : (
            <EmptyNotes text="List of active notes is empty" />
          )}
        </article>
      </main>
    </RootContainer>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  CardNote,
  CardSkeleton,
  EmptyNotes,
  buttonVariants,
} from '../../components/ui'
import { CardContainer } from '../../components/layouts'
import { archiveNote, deleteNote, getActiveNotes } from '../../utils/notes'
import { toast, Toaster } from 'react-hot-toast'

export const HomePage = () => {
  const [activeNotes, setActiveNotes] = useState([])
  const [loading, setLoading] = useState(true)

  const getNotes = async () => {
    const { error, data } = await getActiveNotes()

    if (error) {
      toast.error(data.message)
      setLoading(false)
      return
    }

    setActiveNotes(data)
    setLoading(false)
  }

  const handleDelete = async (id) => {
    await deleteNote(id)
    getNotes()
    toast.success('Note deleted successfully')
  }

  const handleArchive = async (id) => {
    await archiveNote(id)
    getNotes()
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <>
      <Toaster />
      <main className="my-8 w-full max-w-3xl">
        <article>
          <div className="mb-6 flex items-center justify-between">
            <div className="flex gap-2">
              <Link to="/archived" className={buttonVariants()}>
                Archived
              </Link>
              <Button>Create Note</Button>
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
    </>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  CardNote,
  EmptyNotes,
  buttonVariants,
} from '../../components/ui'
import { CardContainer } from '../../components/layouts'
import { archiveNote, deleteNote, getActiveNotes } from '../../utils/notes'

export const HomePage = () => {
  const [activeNotes, setActiveNotes] = useState([])

  const getNotes = async () => {
    const { error, data } = await getActiveNotes()

    if (error) {
      console.log(error)
      return
    }

    setActiveNotes(data)
  }

  const handleDelete = async (id) => {
    await deleteNote(id)
    getNotes()
  }

  const handleArchive = async (id) => {
    await archiveNote(id)
    getNotes()
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <main className="my-8 w-full max-w-3xl">
      <article>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex gap-2">
            <Link to="/archived" className={buttonVariants()}>
              Archived
            </Link>
            <Button>Create Note</Button>
          </div>
        </div>

        {activeNotes?.length > 0 ? (
          <CardContainer notes={activeNotes}>
            {activeNotes.map((note) => (
              <CardNote key={note.id} {...note} handleDelete={handleDelete}>
                <Button
                  onClick={() => handleArchive(note.id)}
                  color="success"
                  size="icon">
                  Unarchive
                </Button>
              </CardNote>
            ))}
          </CardContainer>
        ) : (
          <EmptyNotes text="List of active notes is empty" />
        )}
      </article>
    </main>
  )
}

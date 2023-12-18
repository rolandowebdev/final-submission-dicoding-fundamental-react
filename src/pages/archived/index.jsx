import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  CardNote,
  EmptyNotes,
  buttonVariants,
} from '../../components/ui'
import { CardContainer } from '../../components/layouts'
import { getArchivedNotes, deleteNote, unarchiveNote } from '../../utils/notes'

export const ArchivedPage = () => {
  const [archivedNotes, setArchivedNotes] = useState([])

  const getNotes = async () => {
    const { error, data } = await getArchivedNotes()

    if (error) {
      console.log(error)
      return
    }

    setArchivedNotes(data)
  }

  const handleDelete = async (id) => {
    await deleteNote(id)
    getNotes()
  }

  const handleUnarchive = async (id) => {
    await unarchiveNote(id)
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
            <Link to="/dashboard" className={buttonVariants()}>
              Back to Dashboard
            </Link>
            <Button>Create Note</Button>
          </div>
        </div>

        {archivedNotes?.length > 0 ? (
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
  )
}

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CardContainer, Navbar, RootContainer } from '../../components/layouts'
import {
  CardNote,
  CardSkeleton,
  EmptyNotes,
  buttonVariants,
} from '../../components/ui'
import { EN, ID } from '../../constants/language'
import { ROUTES } from '../../constants/path-name'
import { useLanguage } from '../../hooks/useLanguage'
import { archiveNote, deleteNote, getActiveNotes } from '../../utils/notes'
import { showErrorToaster, showSuccessToaster } from '../../utils/toast'

export const DashboardPage = () => {
  const { language } = useLanguage()

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
    showSuccessToaster({
      message: `${language === 'en' ? ID['delete-notif'] : EN['delete-notif']}`,
    })
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
              <Link
                to={`/${ROUTES.ARCHIVED}`}
                className={clsx(buttonVariants(), 'w-[90px] text-center')}>
                {language === 'en' ? ID.archive : EN.archive}
              </Link>
              <Link
                to={`/${ROUTES.CREATE}`}
                className={clsx(buttonVariants(), 'w-32')}>
                {language === 'en' ? ID['create-note'] : EN['create-note']}
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
                <CardNote
                  key={note.id}
                  {...note}
                  handleDelete={handleDelete}
                  handleArchive={handleArchive}
                  archiveText={language === 'en' ? ID.archive : EN.archive}
                />
              ))}
            </CardContainer>
          ) : (
            <EmptyNotes
              text={language === 'en' ? ID['active-empty'] : EN['active-empty']}
            />
          )}
        </article>
      </main>
    </RootContainer>
  )
}

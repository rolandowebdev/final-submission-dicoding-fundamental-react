import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CardContainer,
  Footer,
  Navbar,
  RootContainer,
  PageContainer,
} from '@/components/layouts'
import {
  CardNote,
  CardSkeleton,
  EmptyNotes,
  buttonVariants,
} from '@/components/ui'
import { EN, ID } from '@/constants/language'
import { ROUTES } from '@/constants/path-name'
import { useLanguage } from '@/hooks/useLanguage'
import { archiveNote, deleteNote, getActiveNotes } from '@/utils/notes'
import { showErrorToaster, showSuccessToaster } from '@/utils/toast'

export const DashboardPage = () => {
  const { language } = useLanguage()

  const [activeNotes, setActiveNotes] = useState([])
  const [loadingNotes, setLoadingNotes] = useState(true)
  const [loadingArchive, setLoadingArchive] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)

  const getNotes = async () => {
    const { error, data } = await getActiveNotes()

    if (error) {
      showErrorToaster({ message: data })
      setLoadingNotes(false)
      return
    }

    setActiveNotes(data)
    setLoadingNotes(false)
  }

  const handleDelete = async (id) => {
    setLoadingDelete(true)
    await deleteNote(id)
    setLoadingDelete(false)
    getNotes()
    showSuccessToaster({
      message: `${language === 'en' ? ID['delete-notif'] : EN['delete-notif']}`,
    })
  }

  const handleArchive = async (id) => {
    setLoadingArchive(true)
    await archiveNote(id)
    setLoadingArchive(false)
    getNotes()
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <RootContainer className="items-center">
      <Navbar />
      <PageContainer>
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
                className={clsx(buttonVariants(), 'w-32 text-center')}>
                {language === 'en' ? ID['create-note'] : EN['create-note']}
              </Link>
            </div>
          </div>

          {loadingNotes ? (
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
                  loadingDelete={loadingDelete}
                  loadingArchive={loadingArchive}
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
      </PageContainer>
      <Footer />
    </RootContainer>
  )
}

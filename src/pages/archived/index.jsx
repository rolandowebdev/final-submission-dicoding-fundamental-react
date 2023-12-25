import clsx from 'clsx'
import { ChevronLeft } from 'lucide-react'
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
import { deleteNote, getArchivedNotes, unarchiveNote } from '@/utils/notes'
import { showErrorToaster, showSuccessToaster } from '@/utils/toast'

export const ArchivedPage = () => {
  const { language } = useLanguage()

  const [archivedNotes, setArchivedNotes] = useState([])
  const [loadingNotes, setLoadingNotes] = useState(true)
  const [loadingActive, setLoadingActive] = useState(false)
  const [loadingDelete, setLoadingDelete] = useState(false)

  const getNotes = async () => {
    const { error, data } = await getArchivedNotes()

    if (error) {
      showErrorToaster({ message: data })
      setLoadingNotes(false)
      return
    }

    setArchivedNotes(data)
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

  const handleUnarchive = async (id) => {
    setLoadingActive(true)
    await unarchiveNote(id)
    setLoadingActive(false)
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
            <Link
              to={`/${ROUTES.DASHBOARD}`}
              className={clsx(
                buttonVariants(),
                'flex w-[211px] items-center justify-center',
              )}>
              <ChevronLeft size={22} /> {language === 'en' ? ID.back : EN.back}
            </Link>
          </div>

          {loadingNotes ? (
            <CardContainer>
              {[...Array(3)].map((_, index) => (
                <CardSkeleton key={index} />
              ))}
            </CardContainer>
          ) : archivedNotes?.length > 0 ? (
            <CardContainer notes={archivedNotes}>
              {archivedNotes.map((note) => (
                <CardNote
                  key={note.id}
                  {...note}
                  handleDelete={handleDelete}
                  handleArchive={handleUnarchive}
                  loadingArchive={loadingActive}
                  loadingDelete={loadingDelete}
                  archiveText={language === 'en' ? ID.active : EN.active}
                />
              ))}
            </CardContainer>
          ) : (
            <EmptyNotes
              text={
                language === 'en' ? ID['archived-empty'] : EN['archived-empty']
              }
            />
          )}
        </article>
      </PageContainer>
      <Footer />
    </RootContainer>
  )
}

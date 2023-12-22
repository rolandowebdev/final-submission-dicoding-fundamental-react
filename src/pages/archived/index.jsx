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
    showSuccessToaster({
      message: `${language === 'en' ? ID['delete-notif'] : EN['delete-notif']}`,
    })
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

          {loading ? (
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

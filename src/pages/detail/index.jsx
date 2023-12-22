import clsx from 'clsx'
import parse from 'html-react-parser'
import { ChevronLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Navbar, RootContainer } from '../../components/layouts'
import { DetailSkeleton, Heading, buttonVariants } from '../../components/ui'
import { EN, ID } from '../../constants/language'
import { ROUTES } from '../../constants/path-name'
import { useLanguage } from '../../hooks/useLanguage'
import { showFormattedDate } from '../../utils/formattedDate'
import { getNote } from '../../utils/notes'
import { showErrorToaster } from '../../utils/toast'

export const DetailPage = () => {
  const { noteId } = useParams()
  const { language } = useLanguage()

  const [note, setNote] = useState({})
  const [loading, setLoading] = useState(true)

  const getNoteById = async () => {
    const { error, data } = await getNote(noteId)

    if (error) {
      showErrorToaster({ message: data })
      setLoading(false)
      return
    }

    setNote(data)
    setLoading(false)
  }

  useEffect(() => {
    getNoteById()
  }, [noteId])

  return (
    <RootContainer className="items-center">
      <Navbar />
      <main className="my-8 w-full max-w-3xl">
        <header>
          <Link
            to={`/${ROUTES.DASHBOARD}`}
            className={clsx(
              buttonVariants(),
              'flex w-[211px] items-center justify-center',
            )}>
            <ChevronLeft size={22} /> {language === 'en' ? ID.back : EN.back}
          </Link>
        </header>
        <article className="mt-4">
          <>
            {loading ? (
              <DetailSkeleton />
            ) : (
              <>
                <img
                  src="/assets/note.webp"
                  alt="Example note"
                  className="dark:border-brand-border h-[300px] w-full rounded-md border border-slate-300"
                />
                <Heading className="mt-4">{note?.title}</Heading>
                <p className="text-brand-softDark my-2 leading-6 dark:text-slate-400">
                  {parse(note?.body || '')}
                </p>
                <time
                  className="dark:border-brand-border dark:bg-brand-softDark bg-brand-softLight w-max rounded-sm border border-slate-400 px-2 py-1 text-xs"
                  dateTime={note?.createdAt}>
                  {showFormattedDate(note?.createdAt)}
                </time>
              </>
            )}
          </>
        </article>
      </main>
    </RootContainer>
  )
}

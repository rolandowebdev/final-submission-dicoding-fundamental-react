import clsx from 'clsx'
import parse from 'html-react-parser'
import { ChevronLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Footer, Navbar, RootContainer } from '@/components/layouts'
import { DetailSkeleton, Heading, buttonVariants } from '@/components/ui'
import { EN, ID } from '@/constants/language'
import { ROUTES } from '@/constants/path-name'
import { useLanguage } from '@/hooks/useLanguage'
import { showFormattedDate } from '@/utils/formattedDate'
import { getNote } from '@/utils/notes'
import { showErrorToaster } from '@/utils/toast'

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
      <main className="mb-auto mt-8 w-full max-w-3xl">
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
                  className="h-[300px] w-full rounded-md border border-slate-300 dark:border-brand-border"
                />
                <Heading className="mt-4">{note?.title}</Heading>
                <p className="mb-3 mt-2 leading-6 text-brand-softDark dark:text-slate-400">
                  {parse(note?.body || '')}
                </p>
                <time
                  className="w-max rounded-sm border border-slate-400 bg-brand-softLight px-2 py-1 text-xs dark:border-brand-border dark:bg-brand-softDark"
                  dateTime={note?.createdAt}>
                  {showFormattedDate(note?.createdAt)}
                </time>
              </>
            )}
          </>
        </article>
      </main>
      <Footer />
    </RootContainer>
  )
}

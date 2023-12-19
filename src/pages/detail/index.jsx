import clsx from 'clsx'
import parse from 'html-react-parser'
import { ChevronLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useParams } from 'react-router-dom'
import { Navbar, RootContainer } from '../../components/layouts'
import { Heading, DetailSkeleton, buttonVariants } from '../../components/ui'
import { showFormattedDate } from '../../utils/formattedDate'
import { getNote } from '../../utils/notes'

export const DetailPage = () => {
  const { noteId } = useParams()
  const [note, setNote] = useState({})
  const [loading, setLoading] = useState(true)

  const getNoteById = async () => {
    const { error, data } = await getNote(noteId)

    if (error) {
      toast.error(data)
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
            to="/dashboard"
            className={clsx(buttonVariants(), 'flex w-max items-center')}>
            <ChevronLeft size={22} /> Back to Dashboard
          </Link>
        </header>
        <article className="mt-4">
          <>
            {loading ? (
              <DetailSkeleton />
            ) : (
              <>
                <img
                  src="/example.webp"
                  alt="Example note"
                  className="h-60 w-full rounded-md"
                />
                <Heading className="mt-4">{note?.title}</Heading>
                <p className="my-2 leading-6 text-slate-300">
                  {parse(note?.body || '')}
                </p>
                <time
                  className="w-max rounded-sm bg-softDark px-2 py-1 text-xs"
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
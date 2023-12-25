import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import { EN, ID } from '@/constants/language'
import { ROUTES } from '@/constants/path-name'
import { useFormattedDate } from '@/hooks/useFormattedDate'
import { useLanguage } from '@/hooks/useLanguage'
import { Link } from 'react-router-dom'
import { Modal } from '../layouts'
import { Button } from './button'
import { Heading } from './heading'

export const CardNote = ({
  id,
  body,
  title,
  createdAt,
  archiveText,
  handleDelete,
  handleArchive,
  loadingDelete,
  loadingArchive,
}) => {
  const { language } = useLanguage()
  const formattedDate = useFormattedDate(createdAt)

  return (
    <div className="flex min-h-[290px] select-none flex-col gap-3 rounded-md border border-slate-300 bg-brand-softLight p-4 duration-300 hover:shadow-sm dark:border-brand-border dark:bg-brand-softDark dark:hover:bg-brand-softDark/70 dark:hover:shadow-brand-softDark">
      <Link to={`/${ROUTES.NOTES}/${id}`} className="hover:underline">
        <Heading size="h2">{title}</Heading>
      </Link>
      <p className="whitespace-pre-line break-words text-justify leading-6 text-brand-softDark dark:text-slate-400">
        {parse(body).length > 100
          ? `${parse(body).slice(0, 100)}...`
          : parse(body)}
      </p>
      <time
        className="w-max rounded-sm border border-slate-300 bg-brand-light px-2 py-1 text-xs dark:border-brand-border dark:bg-brand-dark"
        dateTime={createdAt}>
        {formattedDate}
      </time>
      <div className="mt-auto flex gap-2">
        <Modal
          loading={loadingDelete}
          text={language === 'en' ? ID.delete : EN.delete}
          handleAction={() => handleDelete(id)}
          description={
            language === 'en' ? ID['delete-message'] : EN['delete-message']
          }
        />
        <Button
          size="icon"
          color="success"
          onClick={() => handleArchive(id)}
          disabled={loadingArchive}
          className="w-20">
          {archiveText}
        </Button>
      </div>
    </div>
  )
}

CardNote.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleArchive: PropTypes.func.isRequired,
  archiveText: PropTypes.string.isRequired,
  loadingArchive: PropTypes.bool.isRequired,
  loadingDelete: PropTypes.bool.isRequired,
}

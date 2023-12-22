import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { EN, ID } from '../../constants/language'
import { ROUTES } from '../../constants/path-name'
import { useLanguage } from '../../hooks/useLanguage'
import { showFormattedDate } from '../../utils/formattedDate'
import { Modal } from '../layouts'
import { Button } from './button'
import { Heading } from './heading'

export const CardNote = ({
  id,
  title,
  body,
  createdAt,
  handleDelete,
  handleArchive,
  archiveText,
}) => {
  const { language } = useLanguage()

  return (
    <div className="dark:border-brand-border dark:bg-brand-softDark dark:hover:bg-brand-softDark/70 dark:hover:shadow-brand-softDark bg-brand-softLight flex min-h-[290px] select-none flex-col gap-3 rounded-md border border-slate-300 p-4 duration-300 hover:shadow-sm">
      <Link to={`/${ROUTES.NOTES}/${id}`} className="hover:underline">
        <Heading size="h2">{title}</Heading>
      </Link>
      <p className="text-brand-softDark dark:text-brand-light leading-6">
        {parse(body)}
      </p>
      <time
        className="dark:border-brand-border dark:bg-brand-dark bg-brand-light w-max rounded-sm border border-slate-300 px-2 py-1 text-xs"
        dateTime={createdAt}>
        {showFormattedDate(createdAt)}
      </time>
      <div className="mt-auto flex gap-2">
        <Modal
          text={language === 'en' ? ID.delete : EN.delete}
          description={
            language === 'en' ? ID['delete-message'] : EN['delete-message']
          }
          handleAction={() => handleDelete(id)}
        />
        <Button
          onClick={() => handleArchive(id)}
          color="success"
          size="icon"
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
}

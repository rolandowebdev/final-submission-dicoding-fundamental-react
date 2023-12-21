import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/path-name'
import { showFormattedDate } from '../../utils/formattedDate'
import { Modal } from '../layouts'
import { Heading } from './heading'
import { useLanguage } from '../../hooks/useLanguage'
import { EN, ID } from '../../constants/language'
import { Button } from './button'

export const CardNote = ({
  children,
  id,
  title,
  body,
  createdAt,
  handleDelete,
  handleArchive,
}) => {
  const { language } = useLanguage()

  return (
    <div className="flex min-h-[290px] select-none flex-col gap-3 rounded-md border border-slate-400 bg-slate-300 p-4 duration-300 hover:shadow-sm dark:border-border dark:bg-softDark dark:hover:bg-softDark/70 dark:hover:shadow-softDark">
      <Link to={`/${ROUTES.NOTES}/${id}`} className="hover:underline">
        <Heading size="h2">{title}</Heading>
      </Link>
      <p className="leading-6 text-softDark dark:text-slate-300">
        {parse(body)}
      </p>
      <time
        className="w-max rounded-sm border border-slate-400 bg-light px-2 py-1 text-xs dark:border-border dark:bg-dark"
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
        <Button onClick={() => handleArchive(id)} color="success" size="icon">
          {language === 'en' ? ID.archive : EN.archive}
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
}

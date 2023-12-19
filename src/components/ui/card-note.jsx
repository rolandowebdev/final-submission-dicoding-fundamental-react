import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import { showFormattedDate } from '../../utils/formattedDate'
import { Button } from './button'
import { Heading } from './heading'

export const CardNote = ({
  children,
  id,
  title,
  body,
  createdAt,
  handleDelete,
}) => {
  return (
    <div className="flex min-h-[290px] select-none flex-col gap-3 rounded-md border border-border bg-softDark p-4 transition-all duration-300 hover:-translate-y-1 hover:bg-softDark/70 hover:shadow-sm hover:shadow-softDark">
      <Heading size="h2">{title}</Heading>
      <p className="leading-6 text-slate-300">{parse(body)}</p>
      <time
        className="w-max rounded-sm bg-dark px-2 py-1 text-xs"
        dateTime={createdAt}>
        {showFormattedDate(createdAt)}
      </time>
      <div className="mt-auto flex gap-2">
        <Button onClick={() => handleDelete(id)} color="danger" size="icon">
          Delete
        </Button>
        {children}
      </div>
    </div>
  )
}

CardNote.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

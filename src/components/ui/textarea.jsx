import clsx from 'clsx'
import PropTypes from 'prop-types'

export const Textarea = ({ className, id, label, ...rest }) => (
  <div className="flex flex-col">
    <label
      htmlFor={id}
      className="block pb-2 text-sm font-medium capitalize leading-6">
      {label}
    </label>
    <textarea
      {...rest}
      id={id}
      className={clsx(
        'resize-none rounded-md bg-dark px-3 py-1 transition duration-200 hover:ring-1 hover:ring-light focus:outline-none focus:ring-2 focus:ring-blue-600 focus-visible:ring-2',
        className,
      )}
    />
  </div>
)

Textarea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

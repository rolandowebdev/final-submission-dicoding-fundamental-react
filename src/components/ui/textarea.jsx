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
        'dark:bg-brand-dark resize-none rounded-md bg-white px-3 py-1 transition duration-300 hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus-visible:ring-2',
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

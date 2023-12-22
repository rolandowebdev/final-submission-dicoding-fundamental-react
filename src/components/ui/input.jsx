import clsx from 'clsx'
import PropTypes from 'prop-types'

export const Input = ({ className, id, label, ...rest }) => (
  <div className="flex flex-col">
    <label
      htmlFor={id}
      className="block pb-2 text-sm font-medium capitalize leading-6">
      {label}
    </label>
    <input
      {...rest}
      id={id}
      className={clsx(
        'dark:bg-brand-dark rounded-md bg-white px-3 py-1 duration-300 hover:ring-1 hover:ring-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus-visible:ring-2',
        className,
      )}
    />
  </div>
)

Input.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

import clsx from 'clsx'
import PropTypes from 'prop-types'

export const Input = ({ className, id, label, ...rest }) => (
  <div className="flex flex-col">
    <label htmlFor={id} className="block pb-2 text-sm font-medium leading-6">
      {label}
    </label>
    <input
      {...rest}
      id={id}
      className={clsx(
        'bg-dark hover:ring-light rounded-md px-3 py-1 duration-200 hover:ring-1 focus:outline-none focus:ring-2 focus:ring-blue-600 focus-visible:ring-2',
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

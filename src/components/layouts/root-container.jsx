import clsx from 'clsx'
import PropTypes from 'prop-types'

export const RootContainer = ({ children, className, ...rest }) => (
  <div
    {...rest}
    className={clsx(
      'bg-dark text-light flex min-h-screen flex-col px-2 sm:px-4',
      className,
    )}>
    {children}
  </div>
)

RootContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

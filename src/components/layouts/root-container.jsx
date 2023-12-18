import clsx from 'clsx'
import PropTypes from 'prop-types'

export const RootContainer = ({ children, className, ...rest }) => (
  <div
    {...rest}
    className={clsx(
      'flex min-h-screen flex-col bg-dark px-2 text-light sm:px-4',
      className,
    )}>
    {children}
  </div>
)

RootContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

import clsx from 'clsx'
import PropTypes from 'prop-types'

export const RootContainer = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={clsx(
        'flex min-h-screen flex-col bg-light px-2 text-dark duration-300 dark:bg-dark dark:text-light sm:px-4',
        className,
      )}>
      {children}
    </div>
  )
}

RootContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

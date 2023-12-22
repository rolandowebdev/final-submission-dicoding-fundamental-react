import clsx from 'clsx'
import PropTypes from 'prop-types'

export const RootContainer = ({ children, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={clsx(
        'text-brand-dark dark:bg-brand-dark dark:text-brand-light bg-brand-light flex min-h-screen flex-col px-2 duration-300 sm:px-4',
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

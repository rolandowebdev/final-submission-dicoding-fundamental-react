import clsx from 'clsx'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'dark:border-brand-border h-11 rounded-md border border-slate-300 px-4 py-2 font-medium transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:opacity-60',
  variants: {
    color: {
      default: 'dark:bg-brand-softDark bg-brand-softLight',
      success: 'text-brand-light bg-teal-600',
      danger: 'text-brand-light bg-rose-600',
    },
    size: {
      icon: 'px-[10px]',
    },
  },
  defaultVariants: {
    color: 'default',
  },
})

export const Button = ({ color, size, children, className, ...rest }) => {
  return (
    <button
      {...rest}
      className={clsx(buttonVariants({ color, size }), className)}>
      {children}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf(['success', 'danger']),
  size: PropTypes.oneOf(['icon']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

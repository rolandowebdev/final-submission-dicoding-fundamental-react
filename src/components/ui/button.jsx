import clsx from 'clsx'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'rounded-md border px-4 py-2 font-medium transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:opacity-60',
  variants: {
    color: {
      default:
        'border-slate-400 bg-slate-300 dark:border-border dark:bg-softDark',
      success: 'border-teal-600 bg-success text-light',
      danger: 'border-rose-600 bg-rose-600 text-light',
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

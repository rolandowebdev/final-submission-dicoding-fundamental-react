import clsx from 'clsx'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'rounded-md px-4 py-2 font-medium text-light transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60',
  variants: {
    color: {
      default: 'bg-softDark',
      success: 'bg-success',
      danger: 'bg-rose-600',
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

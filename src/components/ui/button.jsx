import clsx from 'clsx'
import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'

const styles = tv({
  base: 'rounded-md px-4 py-1 font-medium transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60',
  variants: {
    color: {
      success: 'text-light bg-success',
      danger: 'text-light bg-rose-600',
    },
  },
  defaultVariants: {
    color: 'success',
  },
})

export const Button = ({ color, children, className, ...rest }) => {
  return (
    <button {...rest} className={clsx(styles({ color }), className)}>
      {children}
    </button>
  )
}

Button.propTypes = {
  color: PropTypes.oneOf(['success', 'danger']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'
import { tv } from 'tailwind-variants'

const styles = tv({
  base: 'font-bold',
  variants: {
    size: {
      h1: 'text-3xl',
      h2: 'text-2xl',
      h3: 'text-xl',
    },
  },
  defaultVariants: {
    size: 'h1',
  },
})

export const Heading = ({ size, children, className, ...rest }) => {
  return React.createElement(
    size || 'h1',
    { className: clsx(styles({ size: size }), className), ...rest },
    children,
  )
}

Heading.propTypes = {
  size: PropTypes.oneOf(['h1', 'h2', 'h3']),
  children: PropTypes.string,
  className: PropTypes.string,
}

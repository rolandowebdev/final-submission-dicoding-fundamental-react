import clsx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

export const ModalContent = ({ className, children }) => {
  return (
    <article
      className={clsx(
        'z-20 rounded-md shadow-md',
        'dark:bg-brand-dark bg-brand-light',
        'fixed left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 p-4',
        className,
      )}>
      {children}
    </article>
  )
}

ModalContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

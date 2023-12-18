import clsx from 'clsx'
import PropTypes from 'prop-types'

export const CardContainer = ({ children, notes }) => {
  return (
    <div
      className={clsx(
        'grid gap-3 md:grid-cols-2 lg:grid-cols-3',
        notes?.length > 3 ? 'grid-rows-2' : 'grid-rows-1',
      )}>
      {children}
    </div>
  )
}

CardContainer.propTypes = {
  children: PropTypes.node,
  notes: PropTypes.array.isRequired,
}

import PropTypes from 'prop-types'

export const ModalBody = ({ children }) => {
  return <div className="pt-8">{children}</div>
}

ModalBody.propTypes = {
  children: PropTypes.node.isRequired,
}

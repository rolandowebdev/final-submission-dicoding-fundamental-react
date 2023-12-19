import PropTypes from 'prop-types'

export const ModalOverlay = ({ handleHideModal }) => {
  return (
    <div
      onClick={handleHideModal}
      className="fixed inset-0 z-10 bg-light/50 backdrop-blur-sm dark:bg-softDark/50"></div>
  )
}

ModalOverlay.propTypes = {
  handleHideModal: PropTypes.func.isRequired,
}

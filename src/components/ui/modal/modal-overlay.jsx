import PropTypes from 'prop-types'

export const ModalOverlay = ({ handleHideModal }) => {
  return (
    <div
      onClick={handleHideModal}
      className="dark:bg-brand-softDark/50 bg-brand-light/50 fixed inset-0 z-10 backdrop-blur-sm"></div>
  )
}

ModalOverlay.propTypes = {
  handleHideModal: PropTypes.func.isRequired,
}

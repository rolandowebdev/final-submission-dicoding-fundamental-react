import PropTypes from 'prop-types'
import { Button } from '../button'

export const ModalFooter = ({ children, handleHideModal }) => {
  return (
    <footer className="flex items-center justify-end gap-4 pt-6">
      <Button onClick={handleHideModal}>Cancel</Button>
      {children}
    </footer>
  )
}

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
  handleHideModal: PropTypes.func.isRequired,
}

import PropTypes from 'prop-types'
import { useState } from 'react'
import {
  Button,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '../ui'

export const Modal = ({ text, description, handleAction }) => {
  const [isShowModal, setIsShowModal] = useState(false)

  const handleShowModal = (e) => {
    e.stopPropagation()
    setIsShowModal(true)
  }
  const handleHideModal = (e) => {
    e.stopPropagation()
    setIsShowModal(false)
  }

  return (
    <>
      <Button onClick={handleShowModal} color="danger" className="w-20">
        {text}
      </Button>
      {isShowModal && (
        <>
          <ModalOverlay handleHideModal={handleHideModal} />
          <ModalContent className="max-w-sm">
            <ModalHeader title={text} handleHideModal={handleHideModal} />
            <ModalBody>
              <p className="text-lg">{description}</p>
            </ModalBody>
            <ModalFooter handleHideModal={handleHideModal}>
              <Button color="danger" onClick={handleAction}>
                {text}
              </Button>
            </ModalFooter>
          </ModalContent>
        </>
      )}
    </>
  )
}

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleAction: PropTypes.func.isRequired,
}

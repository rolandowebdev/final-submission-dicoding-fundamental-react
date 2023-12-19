import PropTypes from 'prop-types'
import { X } from 'lucide-react'
import { Button } from '../button'
import { Heading } from '../heading'

export const ModalHeader = ({ title, handleHideModal }) => {
  return (
    <header className="border-b-brand-softLight dark:border-b-brand-softDark flex w-full items-center justify-between border-b-[1px] pb-3">
      <Heading size="h2">{title}</Heading>
      <Button size="icon" onClick={handleHideModal}>
        <X />
      </Button>
    </header>
  )
}

ModalHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleHideModal: PropTypes.func.isRequired,
}

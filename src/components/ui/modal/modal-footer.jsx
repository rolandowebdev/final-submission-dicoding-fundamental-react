import PropTypes from 'prop-types'
import { EN, ID } from '../../../constants/language'
import { useLanguage } from '../../../hooks/useLanguage'
import { Button } from '../button'

export const ModalFooter = ({ children, handleHideModal }) => {
  const { language } = useLanguage()
  return (
    <footer className="flex items-center justify-end gap-4 pt-6">
      <Button onClick={handleHideModal}>
        {language === 'en' ? ID.cancel : EN.cancel}
      </Button>
      {children}
    </footer>
  )
}

ModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
  handleHideModal: PropTypes.func.isRequired,
}

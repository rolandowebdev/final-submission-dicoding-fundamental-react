import PropTypes from 'prop-types'
import { Button } from '../button'
import { useLanguage } from '../../../hooks/useLanguage'
import { EN, ID } from '../../../constants/language'

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

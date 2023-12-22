import { Bird } from 'lucide-react'
import PropTypes from 'prop-types'
import { EN, ID } from '../../constants/language'
import { useLanguage } from '../../hooks/useLanguage'
import { Heading } from './heading'

export const EmptyNotes = ({ text }) => {
  const { language } = useLanguage()
  return (
    <div className="mx-auto mt-16 flex flex-col items-center gap-2">
      <Bird size={154} />
      <Heading className="text-2xl">
        {language === 'en' ? ID['pretty-empty'] : EN['pretty-empty']}
      </Heading>
      <p className="mt-1 text-lg">{text}</p>
    </div>
  )
}

EmptyNotes.propTypes = {
  text: PropTypes.string.isRequired,
}

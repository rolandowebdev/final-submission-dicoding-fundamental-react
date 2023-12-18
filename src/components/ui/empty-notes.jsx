import { Bird } from 'lucide-react'
import { Heading } from './heading'
import PropTypes from 'prop-types'

export const EmptyNotes = ({ text }) => {
  return (
    <div className="mx-auto mt-16 flex flex-col items-center gap-2">
      <Bird size={154} />
      <Heading className="text-2xl">Pretty empty around here</Heading>
      <p className="mt-1 text-lg">{text}</p>
    </div>
  )
}

EmptyNotes.propTypes = {
  text: PropTypes.string.isRequired,
}

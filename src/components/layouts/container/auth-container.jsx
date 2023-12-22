import PropTypes from 'prop-types'

export const AuthContainer = ({ children }) => {
  return <main className="my-auto w-full max-w-xs py-8">{children}</main>
}

AuthContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

import PropTypes from 'prop-types'

export const PageContainer = ({ children }) => {
  return <main className="my-8 mb-auto w-full max-w-3xl">{children}</main>
}

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

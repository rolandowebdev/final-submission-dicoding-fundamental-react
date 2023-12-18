import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import { Navbar } from './navbar'
import { getAccessToken } from '../../utils/auth'

export const RootContainer = ({ className, ...rest }) => {
  const isUserExist = getAccessToken()
  return (
    <div
      {...rest}
      className={clsx(
        'flex min-h-screen flex-col bg-dark px-2 text-light sm:px-4',
        className,
      )}>
      {isUserExist && <Navbar />}
      <Outlet />
    </div>
  )
}

RootContainer.propTypes = {
  className: PropTypes.string,
}

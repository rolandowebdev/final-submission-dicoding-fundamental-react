import { Navigate, createBrowserRouter, redirect } from 'react-router-dom'
import { ArchivedPage } from '../pages/archived'
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'
import { RegisterPage } from '../pages/register'
import { getUserLogged } from '../utils/auth'

const protectedRoutes = () => {
  if (!localStorage.getItem('accessToken')) {
    return redirect('/login')
  }
  return null
}

const loginLoader = () => {
  if (localStorage.getItem('accessToken')) {
    return redirect('/dashboard')
  }
  return null
}

export const routes = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: 'login',
        element: <LoginPage />,
        loader: () => loginLoader(),
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    id: 'user',
    path: '/',
    loader: () => getUserLogged(),
    children: [
      {
        path: 'dashboard',
        element: <HomePage />,
        loader: () => protectedRoutes(),
      },
      {
        path: 'archived',
        element: <ArchivedPage />,
        loader: () => protectedRoutes(),
      },
    ],
  },
])

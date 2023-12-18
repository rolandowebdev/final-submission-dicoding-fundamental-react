import { Navigate, createBrowserRouter, redirect } from 'react-router-dom'
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'
import { RegisterPage } from '../pages/register'
import { getUserLogged } from '../utils/auth'
import { RootContainer } from '../components/layouts'
import { Outlet } from 'react-router-dom'
import { ArchivedPage } from '../pages/archived'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootContainer className="items-center justify-center" />,
    children: [
      {
        index: true,
        element: <Navigate to="login" replace />,
      },
      {
        path: 'login',
        element: <LoginPage />,
        loader: () => {
          if (localStorage.getItem('accessToken')) {
            return redirect('/dashboard')
          }
          return null
        },
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
    element: <RootContainer className="items-center" />,
    loader: () => getUserLogged(),
    children: [
      {
        path: 'dashboard',
        element: <HomePage />,
        loader: () => {
          if (!localStorage.getItem('accessToken')) {
            return redirect('/login')
          }
          return null
        },
      },
      {
        path: 'archived',
        element: <ArchivedPage />,
        loader: () => {
          if (!localStorage.getItem('accessToken')) {
            return redirect('/login')
          }
          return null
        },
      },
    ],
  },
])

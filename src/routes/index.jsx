import { Navigate, createBrowserRouter, redirect } from 'react-router-dom'
import { HomePage } from '../pages/home'
import { LoginPage } from '../pages/login'

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
        loader: () => {
          if (localStorage.getItem('accessToken')) {
            return redirect('/dashboard')
          }
          return null
        },
      },
    ],
  },
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
])

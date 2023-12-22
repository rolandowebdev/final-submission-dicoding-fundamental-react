import { Navigate, createBrowserRouter, redirect } from 'react-router-dom'
import { ROUTES } from '@/constants/path-name'
import { ArchivedPage } from '@/pages/archived'
import { CreatePage } from '@/pages/create'
import { DashboardPage } from '@/pages/dashboard'
import { DetailPage } from '@/pages/detail'
import { LoginPage } from '@/pages/login'
import { NotFound } from '@/pages/notfound'
import { RegisterPage } from '@/pages/register'
import { getUserLogged } from '@/utils/auth'

const protectedRoutes = () => {
  if (!localStorage.getItem('accessToken')) {
    return redirect(`/${ROUTES.LOGIN}`)
  }
  return null
}

const authLoader = () => {
  if (localStorage.getItem('accessToken')) {
    return redirect(`/${ROUTES.DASHBOARD}`)
  }
  return null
}

export const routes = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    loader: () => authLoader(),
    children: [
      {
        index: true,
        element: <Navigate to={`/${ROUTES.LOGIN}`} replace />,
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterPage />,
      },
    ],
  },
  {
    id: 'user',
    path: ROUTES.ROOT,
    loader: () => getUserLogged(),
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <DashboardPage />,
        loader: () => protectedRoutes(),
      },
      {
        path: ROUTES.ARCHIVED,
        element: <ArchivedPage />,
        loader: () => protectedRoutes(),
      },
      {
        path: ROUTES.CREATE,
        element: <CreatePage />,
        loader: () => protectedRoutes(),
      },
      {
        path: ROUTES.NOTES,
        children: [
          {
            path: ROUTES.NOTE_ID,
            element: <DetailPage />,
            loader: () => protectedRoutes(),
          },
        ],
      },
    ],
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFound />,
  },
])

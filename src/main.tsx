import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router"
import ProtectedRoute from '@/components/auth/ProtectedRoute'
import Auth from '@/pages/Auth'
import Home from '@/pages/Home'
import Preview from '@/pages/Preview'
import AuthProvider from '@/context/AuthProvider'

const route = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider><ProtectedRoute /></AuthProvider>,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "preview", element: <Preview /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthProvider><Auth /></AuthProvider>,
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)

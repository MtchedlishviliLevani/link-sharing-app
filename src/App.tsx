import ProtectedRoute from '@/components/auth/ProtectedRoute'
import { useAuth } from '@/hooks/useAuth'
import Auth from '@/pages/Auth'
import Home from '@/pages/Home'
import Preview from '@/pages/Preview'
import { loggout } from '@/services/authService'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const route = createBrowserRouter([{
  path: "/",
  element: <ProtectedRoute />, // Wrap Home and Preview with ProtectedRoute
  children: [
    { path: "/", element: <Home /> }, // Home page (protected)
    { path: "preview", element: <Preview /> }, // Preview page (protected)
  ],
},
{
  path: "/auth", element: <Auth />,// Auth page (public route)

},
])

function App() {
  const { user } = useAuth()
  console.log(user)
  return (
    <>
      <RouterProvider router={route} />
      {/* {user ? <div>hello {user.email}</div> : <Login />} */}
      <button onClick={loggout}>LOggout</button>
      {/* <Login /> */}
      {/* <Register /> */}
    </>
  )
}

export default App

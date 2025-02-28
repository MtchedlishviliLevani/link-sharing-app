import ProtectedRoute from '@/components/auth/ProtectedRoute'
import { useAuth } from '@/hooks/useAuth'
import Auth from '@/pages/Auth'
import Home from '@/pages/Home'
import Preview from '@/pages/Preview'
import { loggout } from '@/services/authService'
import { createBrowserRouter, RouterProvider } from "react-router"

const route = createBrowserRouter([{
  path: "/",
  element: <ProtectedRoute />, // Wrap Home and Preview with ProtectedRoute
  children: [
    { path: "/", element: <Home />, index: true }, // Home page (protected)
    { path: "preview", element: <Preview /> }, // Preview page (protected)
  ],
},
{
  path: "/auth", element: <Auth />,// Auth page (public route)

},

]
)

function App() {
  const { user } = useAuth()
  console.log(user)
  return (
    <>
      <div className="container mx-auto">
        <RouterProvider router={route} />
        {/* {user ? <div>hello {user.email}</div> : <Login />} */}
        <button onClick={loggout}>LOggout</button>
        {/* <Login /> */}
        {/* <Register /> */}
      </div>
    </>
  )
}

export default App

import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import { useAuth } from '@/hooks/useAuth'

function App() {
  const { user } = useAuth()
  console.log(user)
  return (
    <>
      <Login />
      <Register />
    </>
  )
}

export default App

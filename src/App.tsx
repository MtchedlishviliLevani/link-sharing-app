import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import { useAuth } from '@/hooks/useAuth'
import { loggout } from '@/services/authService'

function App() {
  const { user } = useAuth()
  console.log(user)
  return (
    <>
      {user ? <div>hello {user.email}</div> : <Login />}
      <button onClick={loggout}>LOggout</button>
      {/* <Login /> */}
      {/* <Register /> */}
    </>
  )
}

export default App

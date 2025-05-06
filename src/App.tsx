import { useAuth } from '@/hooks/useAuth'
import { loggout } from '@/services/authService'

function App() {
  const { user } = useAuth()
  return (
    <div className="container mx-auto">
      {user && (
        <button onClick={loggout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
          Logout
        </button>
      )}
    </div>
  )
}

export default App

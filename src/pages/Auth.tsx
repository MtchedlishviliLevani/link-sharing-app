import Login from "@/components/auth/Login"
import Register from "@/components/auth/Register"
import { useState } from "react"
import { Outlet } from "react-router-dom"
function Auth() {
    const [isRegistired, setIsRegistired] = useState(true)
    return (
        <>
            {isRegistired ? <Login setIsRegistired={setIsRegistired} /> : <Register />}

        </>
    )
}

export default Auth

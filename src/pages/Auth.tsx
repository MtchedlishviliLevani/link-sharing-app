import Login from "@/components/auth/Login"
import Register from "@/components/auth/Register"
import { useState } from "react"
import logoDevlinksLarge from "@images/logo-devlinks-large.svg";

function Auth() {
    const [isRegistired, setIsRegistired] = useState(true)
    return (
        <>
            <div className="grid place-items-center h-[100vh]">
                <div className="max-w-[480px] ">
                    <img src={logoDevlinksLarge} alt="" className="m-auto block" />

                    {isRegistired ? <Login setIsRegistired={setIsRegistired} /> : <Register setIsRegistired={setIsRegistired} />}


                </div>
            </div>

        </>
    )
}

export default Auth

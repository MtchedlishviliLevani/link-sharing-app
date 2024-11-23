import { ReactNode, useState } from "react"
import { authContext } from "@/context/authContext"
// import { User } from "firebase/auth";
import { loggout, loginWithEmailAndPassword, signUpWithEmailAndPassword } from "@/services/authService";
import { UserType } from "@/context/authContext";
function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserType>(null);

    const handleLogin = async (email: string, password: string) => {
        try {
            const loggedInUser = await loginWithEmailAndPassword(email, password);
            if (loggedInUser) {
                setUser(loggedInUser)
            }
        } catch (error) {
            console.error(error)
        }
    }
    const handleSignUp = async (email: string, password: string) => {
        try {
            const newUser = await signUpWithEmailAndPassword(email, password)
            if (newUser) {
                setUser(newUser)
            }
        } catch (error) {
            console.error("something wrong", error)
        }
    }

    const handleLoggout = async () => {
        try {
            await loggout();
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <authContext.Provider value={{ handleLoggout, handleLogin, handleSignUp, user }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider

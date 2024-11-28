import { ReactNode, useEffect, useState } from "react"
import { authContext } from "@/context/authContext"
// import { User } from "firebase/auth";
import { loggout, loginWithEmailAndPassword, signUpWithEmailAndPassword } from "@/services/authService";
import { UserType } from "@/context/authContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebase";

function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<UserType>(null);
    const [loading, setLoading] = useState<boolean>(true)

    const handleLogin = async (email: string, password: string) => {
        try {
            const loggedInUser = await loginWithEmailAndPassword(email, password);
            if (loggedInUser) {
                setUser(loggedInUser)
            }
        } catch (error) {
            if (error instanceof Error) {
                // Now TypeScript knows 'error' is of type 'Error'
                throw new Error(error.message);
            } else {
                // Handle other error types (e.g., if it's not an Error object)
                throw new Error("An unknown error occurred");
            }
        }
    }
    const handleSignUp = async (email: string, password: string, name: string) => {
        try {
            const newUser = await signUpWithEmailAndPassword(email, password, name)
            if (newUser) {
                setUser(newUser)
            }
        } catch (error) {
            console.error("something wrong", error)
        }
    }
    // Monitor auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                // Convert Firebase User to your UserType, if needed
                const loggedInUser: UserType = {
                    uid: firebaseUser.uid,
                    email: firebaseUser.email,
                    displayName: firebaseUser.displayName,
                };
                setUser(loggedInUser);
            } else {
                setUser(null);
            }
            setLoading(false); // Set loading to false after initial check
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, []);

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
            {!loading ? children : <div>Loading...</div>} {/* Show loading state */}
        </authContext.Provider>
    )
}

export default AuthProvider

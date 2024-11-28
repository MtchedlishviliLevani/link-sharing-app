import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import emailIcon from "@images/icon-email.svg";
import passwordIcon from "@images/icon-password.svg";
import Input from "@/components/common/Input";
import FormBtn from "@/components/common/FormBtn";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";

interface Props {
    setIsRegistired: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ setIsRegistired }: Props) {
    const { handleLogin } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState('')

    const naviage = useNavigate();
    // form onSubmit function
    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            await handleLogin(email, password);
            setLoginError(""); // Clear error if login is successful
            naviage("/")
        } catch (error) {
            if (error instanceof FirebaseError) {
                // Handle Firebase auth error and display the message
                if (error.code === "auth/wrong-password") {
                    setLoginError("Incorrect password. Please try again.");
                } else if (error.code === "auth/user-not-found") {
                    setLoginError("No user found with this email.");
                } else {
                    setLoginError("Login failed. Please check your credentials.");
                }
            } else {
                // Handle any other unknown errors
                setLoginError("An unexpected error occurred.");
            }
        }
    }
    return (
        <>
            <form
                action=""
                onSubmit={onSubmit}
                className="form"
            >
                <div>
                    <h1 className="form-h1">Login</h1>
                    <p className="text-lightText">
                        Add your details below to get back into the app
                    </p>
                </div>
                <div>
                    <Input
                        inputProps={{
                            type: "email",
                            label: "Email Address",
                            value: email,
                            onChange: (e) => setEmail(e.target.value),
                            placeholder: "Enter your email",
                            icon: emailIcon,
                            name: "email"
                        }}
                    />
                </div>
                <div>
                    <Input
                        inputProps={{
                            type: "password",
                            label: "Password",
                            value: password,
                            onChange: (e) => setPassword(e.target.value),
                            placeholder: "Enter your Password",
                            icon: passwordIcon,
                            name: "password"
                        }}
                    />
                </div>
                <FormBtn>Login</FormBtn>
                <p className="text-lightText text-[13px] text-center">
                    Don't have an account?
                    <button
                        onClick={() => setIsRegistired(false)}
                        className="text-primary"
                    >
                        Create account
                    </button>
                </p>

                <p className="text-red-500 text-center mb-4">
                    {loginError}
                </p>

            </form>
        </>
    );
}

export default Login;

import Input from "@/components/common/Input";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import emailIcon from "@images/icon-email.svg"
import passwordIcon from "@images/icon-password.svg"
import FormBtn from "@/components/common/FormBtn";
import { FirebaseError } from "firebase/app";

interface Props {
    setIsRegistired: React.Dispatch<React.SetStateAction<boolean>>
}

function Register({ setIsRegistired }: Props) {
    const { handleSignUp } = useAuth();
    const [formData, setFormData] = useState({ displayName: "", email: "", password: "", confirm_password: "" })
    const [registerError, setRegisterError] = useState<string>("");
    const [passwordError, setPasswordError] = useState('')



    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const { displayName, email, password, confirm_password } = formData;

        if (confirm_password !== password) {
            setPasswordError("Passwords do not match");
            return;
        }
        if (confirm_password.length < 8 && password.length < 8) {
            setPasswordError("Minimum 8 letters")
            return;
        }

        try {
            await handleSignUp(email, password, displayName, setIsRegistired, setRegisterError)
        } catch (error) {
            if (error instanceof FirebaseError) {
                console.error(error.message)
            }

        }
    }

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

    }

    console.log(formData)
    return (


        <form onSubmit={handleSubmit} className="form">
            <div>
                <h1 className="form-h1">Register</h1>
                <p className="text-lightText">Let’s get you started sharing your links!</p>
            </div>

            <div>

                <Input inputProps={{
                    type: "email",
                    label: "Email Address",
                    value: formData?.email,
                    onChange: handleOnChange,
                    placeholder: "Enter your email",
                    icon: emailIcon,
                    name: "email"
                }} />
            </div>

            <div>

                <Input inputProps={{
                    type: "password",
                    label: "Password",
                    value: formData?.password,
                    onChange: handleOnChange,
                    placeholder: "At least 8 characters",
                    icon: passwordIcon,
                    name: "password"
                }} />
                {passwordError && <p className="text-red-600">{passwordError}</p>}
            </div>
            <div>
                <Input inputProps={{
                    type: "password",
                    label: "Confirm Password",
                    value: formData?.confirm_password,
                    onChange: handleOnChange,
                    placeholder: "At least 8 characters",
                    icon: passwordIcon,
                    name: "confirm_password"
                }} />
                {passwordError && <p className="text-red-600">{passwordError}</p>}

            </div>
            <FormBtn>Register</FormBtn>
            <p> Already have an account?<button
                onClick={() => setIsRegistired(true)}
                className="text-primary ml-[10px]"
            >
                Login
            </button></p>
            <h2 className="text-red-700 text-2xl">{registerError}</h2>
        </form>

    )
}

export default Register

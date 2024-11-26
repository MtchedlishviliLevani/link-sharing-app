import { useAuth } from "@/hooks/useAuth"
import { useState } from "react";
import logoDevlinksLarge from "@images/logo-devlinks-large.svg"
import emailIcon from "@images/icon-email.svg"
import passwordIcon from "@images/icon-password.svg"
import Input from "@/components/common/Input";

function Login() {
    const { handleLogin, user } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // form onSubmit function
    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        handleLogin(email, password)
    }
    return (
        <div className="max-w-[480px] grid place-items-center">
            <img src={logoDevlinksLarge} alt="" />
            <form action="" onSubmit={onSubmit} className="flex flex-col gap-[25px]">
                <div>
                    <h1 className="form-h1">Login</h1>
                    <p className="text-lightText">Add your details below to get back into the app</p></div>
                <div>
                    <Input inputProps={{
                        type: "email",
                        label: "Email Address",
                        value: email,
                        onChange: (e) => setEmail(e.target.value),
                        placeholder: "Enter your email",
                        icon: emailIcon,
                    }} />
                </div>
                <div>
                    <Input inputProps={{
                        type: "password",
                        label: "Password",
                        value: password,
                        onChange: (e) => setPassword(e.target.value),
                        placeholder: "Enter your Password",
                        icon: passwordIcon,
                    }} />
                </div>
                <button type="submit" className="form-btn">Login</button>
                <p className="text-lightText text-[13px] text-center">Don't have an account? <button className="text-primary">Create account</button></p>
            </form>
        </div>
    )
}

export default Login

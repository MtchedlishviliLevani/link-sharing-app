import { useAuth } from "@/hooks/useAuth"
import { useState } from "react";
import logoDevlinksLarge from "@images/logo-devlinks-large.svg"
import emailIcon from "@images/icon-email.svg"
function Login() {

    const { handleLogin, user } = useAuth();
    console.log(user)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        handleLogin(email, password)
    }
    return (
        <div className="max-w-[480px] grid place-items-center">
            <img src={logoDevlinksLarge} alt="" />
            <h1 className="text-black">Login</h1>
            <p className="text-lightText">Add your details below to get back into the app</p>
            <form action="" onSubmit={onSubmit} className="">
                <label htmlFor="" className="form-label">Email Address</label>
                <div className=" flex relative">
                    <img src={emailIcon} className="absolute left-[10px] top-[50%] translate-y-[-50%]" alt="" />
                    <input type="email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                <label className="form-label">Password</label>
                <div><input type="password" className="form-input" value={password} onChange={(e) => setPassword(e.target.value)} /></div>
                <button type="submit" className="form-btn">Login</button>
                <div>Don't have an account? <span className="text-primary">Create account</span></div>
            </form>
        </div>
    )
}

export default Login

import { useAuth } from "@/hooks/useAuth"
import { useState } from "react";

function Login() {

    const { handleLogin } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        handleLogin(email, password)
    }
    return (
        <form action="" onSubmit={onSubmit}>
            <label htmlFor="">email for login</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>password for login</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">login</button>
        </form>
    )
}

export default Login

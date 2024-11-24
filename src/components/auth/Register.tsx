import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

function Register() {
    const { handleSignUp, } = useAuth();
    const [formData, setFormData] = useState({ displayName: "", email: "", password: "" })
    // const [displayName, setDisplayName] = useState("")
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     handleSignUp(email, password);
    // };

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        const { displayName, email, password } = formData
        handleSignUp(email, password, displayName)

    }

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

    }

    console.log(formData)
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        placeholder="name"
                        type="text"
                        name="displayName"
                        value={formData?.displayName}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        placeholder="email"
                        type="email"
                        name="email"
                        value={formData?.email}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <button className="bg-blue-600" type="submit">Register</button>
            </form>

        </div>
    )
}

export default Register

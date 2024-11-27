import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import logoDevlinksLarge from "@images/logo-devlinks-large.svg";
import emailIcon from "@images/icon-email.svg";
import passwordIcon from "@images/icon-password.svg";
import Input from "@/components/common/Input";
import FormBtn from "@/components/common/FormBtn";

interface Props {
    setIsRegistired: React.Dispatch<React.SetStateAction<boolean>>;
}

function Login({ setIsRegistired }: Props) {
    const { handleLogin, user } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // form onSubmit function
    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        handleLogin(email, password);
    }
    return (
        <div className="grid place-items-center h-[100vh]">
            <div className="max-w-[480px] ">
                <img src={logoDevlinksLarge} alt="" className="m-auto block" />
                <form
                    action=""
                    onSubmit={onSubmit}
                    className="flex flex-col gap-[25px] bg-white p-[40px] rounded-[12px]"
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
                            }}
                        />
                    </div>
                    <FormBtn>Login</FormBtn>
                    <p className="text-lightText text-[13px] text-center">
                        Don't have an account?{" "}
                        <button
                            onClick={() => setIsRegistired(false)}
                            className="text-primary"
                        >
                            Create account
                        </button>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;

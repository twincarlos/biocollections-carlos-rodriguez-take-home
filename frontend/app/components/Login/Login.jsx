"use client";
import Input from "../Inputs/Input/Input";
import { useAuth } from "@/app/context/AuthContext";

function Login() {
    const { login } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        await login({
            email: formData.get("email"),
            password: formData.get("password"),
        });
    }

    return (
        <div className="flex flex-direction--column gap-medium">
            <h2 className="title">Login</h2>
            <div className="flex flex-direction--column gap-small">
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-direction--column flex-align-items--flex-start gap-small"
                >
                    <Input
                        type="email"
                        name="email"
                        label="Email"
                        placeholder="Enter your email"
                        required
                    />
                    <Input
                        type="password"
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        required
                    />
                    <button
                        type="submit"
                        className="primary-button padding-small"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
"use client";
import Login from "./Login";
import { useAuth } from "@/app/context/AuthContext";
import { useModal } from "@/app/context/ModalContext";

function LoginButton({ setMenuOpen }) {
    const { user } = useAuth();
    const { setModalContent } = useModal();

    if (user) return null;

    return (
        <button
            className="quaternary-button padding-xs flex flex-justify-content--center flex-align-items--center"
            onClick={() => {
                setMenuOpen(null);
                setModalContent(<Login />);
            }}
        >
            Log In
        </button>
    );
};

export default LoginButton;
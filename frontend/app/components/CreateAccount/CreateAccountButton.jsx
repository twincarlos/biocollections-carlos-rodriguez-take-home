"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useModal } from "@/app/context/ModalContext";
import CreateAccount from "./CreateAccount";

function CreateAccountButton({ setMenuOpen }) {
    const { user } = useAuth();
    const { setModalContent } = useModal();

    if (!user) return null;

    return (
        <button
            className="tertiary-button padding-xs"
            onClick={() => {
                setMenuOpen(null);
                setModalContent(<CreateAccount />);
            }}
        >
            Create Account
        </button>
    );
};

export default CreateAccountButton;
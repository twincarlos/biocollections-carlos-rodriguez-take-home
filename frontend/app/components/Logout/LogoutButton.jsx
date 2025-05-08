"use client";
import Logout from "./Logout";
import { useAuth } from "@/app/context/AuthContext";
import { useModal } from "@/app/context/ModalContext";

function LogoutButton({ setMenuOpen }) {
    const { user } = useAuth();
    const { setModalContent } = useModal();

    if (!user) return null;

    return (
        <button
            className="quaternary-button padding-xs flex flex-justify-content--center flex-align-items--center"
            onClick={() => {
                setMenuOpen(null);
                setModalContent(<Logout />);
            }}
        >
            <span className="material-symbols-outlined">logout</span>
            Log Out
        </button>
    );
};

export default LogoutButton;
"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useModal } from "@/app/context/ModalContext";

function Logout() {
    const { logout } = useAuth();
    const { setModalContent } = useModal();

    async function handleSubmit(e) {
        e.preventDefault();
        await logout();
    };

    return (
        <div>
            <h2 className="title">Logout</h2>
            <div className="flex flex-direction--column gap-small">
                <p>Are you sure you want to logout?</p>
                <form
                    onSubmit={handleSubmit}
                    className="flex gap-small"
                >
                    <button
                        onClick={() => setModalContent(null)}
                        type="button"
                        className="secondary-button padding-xs"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="primary-button padding-xs"
                    >
                        Logout
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Logout;
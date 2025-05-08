"use client";
import { useModal } from "@/app/context/ModalContext";
import { useUpdate } from "@/app/hooks/useUpdate";

function CloseAccount({ client }) {
    const { setModalContent } = useModal();
    const { handleUpdate, loading, error } = useUpdate();

    async function handleSubmit(e) {
        e.preventDefault();
        await handleUpdate({
            url: `http://localhost:8000/clients/${client._id}`,
            method: "DELETE",
            messageOnSuccess: "Account closed successfully!"
        });
        await handleUpdate({
            url: `http://localhost:8000/notifications`,
            method: "POST",
            data: { content: `Account #${client.account} has been closed` }
        });
    }

    return (
        <div className="close-account flex flex-direction--column gap-medium">
            <h2 className="title">Close Account</h2>
            <div className="flex flex-direction--column gap-small">
                <p>Are you sure you want to close this account?</p>
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
                        disabled={loading}
                        className="primary-button padding-xs"
                    >
                        Close Account
                    </button>
                </form>
            </div>
            {error && <div><span className="material-symbols-outlined">warning</span> {error}</div>}
        </div>
    );
};

export default CloseAccount;
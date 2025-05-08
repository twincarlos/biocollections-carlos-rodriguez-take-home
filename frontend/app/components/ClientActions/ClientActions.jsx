"use client";
import { useModal } from "@/app/context/ModalContext";
import { usePopup } from "@/app/context/PopupContext";
import ClientDetails from "../ClientDetails/ClientDetails";
import TransferBalance from "../TransferBalance/TransferBalance";
import CloseAccount from "../CloseAccount/CloseAccount";

function ClientActions({ client }) {
    const { setModalContent } = useModal();
    const { setPopupContent } = usePopup();
    return (
        <div className="client-actions flex flex-justify-content--center">
            <button
                onClick={() => setModalContent(<ClientDetails client={client} />)}
                type="button"
                className="quaternary-button"
            >
                Details |
            </button>
            <button
                onClick={() => setModalContent(<TransferBalance client={client} />)}
                type="button"
                className="quaternary-button"
            >
                &#8203; Transfer |
            </button>
            <button
                onClick={() => setModalContent(<CloseAccount client={client} setModalContent={setModalContent} setPopupContent={setPopupContent} />)}
                type="button"
                className="quaternary-button"
            >
                &#8203; Close Account
            </button>
        </div>
    );
};

export default ClientActions;
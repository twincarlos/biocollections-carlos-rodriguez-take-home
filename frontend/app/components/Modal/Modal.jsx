"use client";
import "./Modal.css";
import { useModal } from "@/app/context/ModalContext";

export default function Modal() {
    const { modalContent, setModalContent } = useModal();
    if (!modalContent) return null;
    return (
        <div className="modal-overlay">
            <div className="card padding-small modal-wrapper flex flex-direction--column flex-align-items--flex-end flex-justify-content--flex-start">
                <button className="modal-close-button tertiary-button" onClick={() => setModalContent(null)}><span className="material-symbols-outlined">close</span></button>
                <div className="modal-content">
                    {modalContent}
                </div>
            </div>
        </div>
    );
};
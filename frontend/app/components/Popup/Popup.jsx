'use client';
import { usePopup } from '@/app/context/PopupContext';
import './Popup.css';

export default function Popup() {
    const { popupContent } = usePopup();
    if (!popupContent) return null;

    return (
        <div className="card padding-small popup-container">
            <div className="popup-message">{popupContent}</div>
        </div>
    );
}

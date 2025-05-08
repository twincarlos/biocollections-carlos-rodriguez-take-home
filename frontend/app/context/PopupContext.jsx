"use client";
import { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

const PopupProvider = ({ children }) => {
    const [popupContent, setPopupContent] = useState(null);

    return (
        <PopupContext.Provider value={{ popupContent, setPopupContent }}>
            {children}
        </PopupContext.Provider>
    );
};

export default PopupProvider;
export const usePopup = () => useContext(PopupContext);
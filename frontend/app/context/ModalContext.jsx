"use client";
import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState(null);

    return (
        <ModalContext.Provider value={{ modalContent, setModalContent }}>
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;
export const useModal = () => useContext(ModalContext);
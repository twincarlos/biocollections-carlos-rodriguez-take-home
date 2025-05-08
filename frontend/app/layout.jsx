import "./globals.css";
import { Poppins } from "next/font/google";
import ModalProvider from "./context/ModalContext";
import Modal from "./components/Modal/Modal";
import PopupProvider from "./context/PopupContext";
import Popup from "./components/Popup/Popup";
import { AuthProvider } from "./context/AuthContext";

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ["latin"]
});

export const metadata = {
  title: "Client Dashboard",
  description: "BioCollections - Take Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ModalProvider>
          <PopupProvider>
            <AuthProvider>
              <Modal />
              <Popup />
              {children}
            </AuthProvider>
          </PopupProvider>
        </ModalProvider>
      </body>
    </html>
  );
}
"use client";
import "./ClientDirectoryFilters.css";
import Image from "next/image";
import Menu from "../Menu/Menu";
import { useState } from "react";
import LoginButton from "../Login/LoginButton";
import LogoutButton from "../Logout/LogoutButton";
import UserProfile from "../UserProfile/UserProfile";
import Notifications from "../Notifications/Notifications";
import settingsIcon from "../../../public/images/fa-gear.png";
import notificationsIcon from "../../../public/images/fa-bell.png";
import CreateAccountButton from "../CreateAccount/CreateAccountButton";
import { useUpdate } from "@/app/hooks/useUpdate";

function ClientDirectoryIcons({ mobileOnly = false }) {
    const [menuOpen, setMenuOpen] = useState(null);
    const { handleUpdate } = useUpdate();

    return (
        <div className={`client-directory-filters--icons flex flex-direction--row flex-justify-content--flex-end flex-align-items--center gap-large ${mobileOnly ? "mobile-only" : "desktop-only"}`}>
            <div className="hide-on-xs">
                <button
                    onClick={async () => {
                        if (menuOpen === "settings" || !menuOpen) setMenuOpen("notifications");
                        else if (menuOpen === "notifications") {
                            setMenuOpen(null);
                            await handleUpdate({
                                url: `/api/notifications`,
                                method: "PATCH"
                            });
                        };
                    }}
                    className="tertiary-button button--large-icon"
                    area-label="Notifications"
                    type="button"
                >
                    <Image
                        alt={"Notifications Icon"}
                        src={notificationsIcon}
                    />
                </button>
            </div>
            <div>
                <button
                    onClick={async () => {
                        if (menuOpen === "settings") setMenuOpen(null);
                        else if (menuOpen === "notifications") {
                            setMenuOpen("settings");
                            await handleUpdate({
                                url: `/api/notifications`,
                                method: "PATCH"
                            });
                        }
                        else if (!menuOpen) setMenuOpen("settings");
                    }}
                    className="tertiary-button button--large-icon"
                    area-label="Settings"
                    type="button"
                >
                    <Image
                        alt={"Settings Icon"}
                        src={settingsIcon}
                    />
                </button>
                {menuOpen === "notifications" && <Notifications />}
                {menuOpen === "settings" && (
                    <div className="settings-menu">
                        <Menu items={[
                            <CreateAccountButton setMenuOpen={setMenuOpen} />,
                            <LogoutButton setMenuOpen={setMenuOpen} />,
                            <LoginButton setMenuOpen={setMenuOpen} />
                        ]} />
                    </div>
                )}
            </div>
            <UserProfile />
        </div>
    );
};

export default ClientDirectoryIcons;
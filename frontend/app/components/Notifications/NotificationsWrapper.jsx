"use client";
import "./Notifications.css";
import Notification from "./Notification";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import { fetchNotifications } from "@/app/utils/api";
import Menu from "../Menu/Menu";

function NotificationsWrapper() {
    const [notifications, setNotifications] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        (async () => {
            const data = await fetchNotifications();
            setNotifications(data);
        })();
    }, []);

    const notificationsData = (notifications.length > 0 && user) ? notifications.map(notification => <Notification notification={notification} />) : [<p>No notifications</p>];

    return (
        <div className="notifications-menu">
            <Menu items={notificationsData} />
        </div>
    );
};

export default NotificationsWrapper;
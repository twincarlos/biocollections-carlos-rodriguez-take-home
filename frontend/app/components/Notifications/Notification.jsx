import "./Notifications.css";

function Notification({ notification }) {
    const date = new Date(notification.timestamp);
    const readableDateTime = date.toLocaleString();

    return (
        <div className={`notification-container padding-xs flex flex-direction--column ${notification.read ? "" : "unread"}`}>
                <p className="timestamp">{readableDateTime}</p>
                <p>{notification.content}</p>
        </div>
    );
};

export default Notification;
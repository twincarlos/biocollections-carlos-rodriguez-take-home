import { Suspense } from "react"; 
import NotificationsWrapper from "./NotificationsWrapper";

function Notifications() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <NotificationsWrapper />
            </Suspense>
        </div>
    );
};

export default Notifications;
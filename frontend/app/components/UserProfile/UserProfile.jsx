"use client";
import "./UserProfile.css";
import Image from "next/image";
import { useAuth } from "@/app/context/AuthContext";
import blankProfile from "../../../public/images/blank-profile.png";
import userProfileImage from "../../../public/images/user-profile.png";

function UserProfile() {
    const { user } = useAuth();
    return (
        <Image
            alt={"User Profile"}
            className="user-profile-image"
            src={user ? userProfileImage : blankProfile}
        />
    );
};

export default UserProfile;
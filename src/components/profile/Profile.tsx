"use client"
import {ProfileComponentProps} from "@/shared/interfaice/interfaice";
import {JSX, useState} from "react";
import styles from "./profile.module.scss";
import Image from "next/image";
import USER from "@/../public/svg/user.svg";
import {UsersProfile} from "@/components/usersProfile/UsersProfile";

export const Profile = ( props: ProfileComponentProps ): JSX.Element => {
    const { className } = props;
    const [isActive, setActive] = useState(false);
    const handleClick = () => {
        setActive((prev) => !prev);
    }
    return (
        <div className={`${className} ${styles.profile}`} onClick={handleClick}>
            <Image src={USER} alt={"icon"} width={15} height={15} className={styles.userImg} />
            {isActive && <UsersProfile className={styles.profile__user} />}
        </div>
    );
};
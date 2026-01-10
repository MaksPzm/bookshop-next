"use client"
import styles from "./UsersProfile.module.scss";
import {ClassProps} from "@/shared/interfaice/interfaice";
import React, {ChangeEvent, JSX, useEffect, useState, MouseEvent} from "react";

export const UsersProfile = ( props: ClassProps): JSX.Element => {
    const { className } = props;
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [validationError, setValidationError] = useState<boolean>(false);
    const handleInpPassword = (event:  ChangeEvent<HTMLInputElement>)=> {
        setPassword(event.currentTarget.value)
    }
    const handleInpEmail = (event:  ChangeEvent<HTMLInputElement>)=> {
        setEmail(event.currentTarget.value);
    }
    const handleClickBtnLogIn = (event: MouseEvent<HTMLButtonElement>) => {
        //event.preventDefault();
        setPassword(null);
        setEmail(null);
    }
    useEffect(() => {
        if (password) {
            password.length > 6 ? setValidationError(true) : setValidationError(false);
        }
    }, [password])
    return (
        <div className={`${className} ${styles.profile}`} onClick={(event) => event.stopPropagation()}>
            <h2 className={styles.profile__title}>Log in</h2>
            <form className={styles.profile__form}>
                <label htmlFor="email" className={styles.form__label}>
                    Email
                    <input id="email" type="email"
                           className={styles.form__label_input}
                           name="email" placeholder={"Email"} autoComplete={"username"}
                           onChange={handleInpEmail} />
                </label>
                <label htmlFor="password" className={styles.form__label}>
                    Password
                        <input id="password" type="password"
                               className={`${styles.form__label_input} ${validationError && styles.form__label_input_err}`}
                               name="password" placeholder="Password"
                               autoComplete={"current-password"}
                               onChange={handleInpPassword} />
                </label>
                {validationError && <span className={styles.form__password_valid}>Your password must be at least 6 characters long</span>}
                <button id={"userBtn"}
                        className={styles.profile__btn}
                        type="submit"
                        onClick={handleClickBtnLogIn}
                >LOG IN</button>
            </form>
        </div>
    );
};
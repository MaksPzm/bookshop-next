"use client"
import Link from 'next/link';
import styles from "./navigation.module.scss";
import {ClassProps} from "@/shared/interfaice/interfaice";
import clsx from 'clsx';
import {usePathname} from "next/navigation";

export const Navigation = ( props: ClassProps ) => {
    const { className } = props;
    const pathname = usePathname();
    return (
        <menu className={`${className} ${styles.navigation}`}>
            <Link href="/" className={clsx(styles.navigation__link, { [styles.disabled]: pathname === "/" })}>BOOKS</Link>
            <Link href="/audiobooks" className={clsx(styles.navigation__link, { [styles.disabled]: pathname === "/audiobooks" })}>AUDIOBOOKS</Link>
            <Link href="/stationery" className={clsx(styles.navigation__link, { [styles.disabled]: pathname === "/stationery" })}>STATIONERY & GIFTS</Link>
            <Link href="/blog" className={clsx(styles.navigation__link, { [styles.disabled]: pathname === "/blog" })}>BLOG</Link>
        </menu>
    );
};
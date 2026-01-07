import {JSX} from "react";
import styles from "./header.module.scss";
import {Navigation} from "@/components/navigation/Navigation";
import {Profile} from "@/components/profile/Profile";
import {ShoppingCart} from "@/components/shoppingСart/ShoppingCart";

const Header = (): JSX.Element => {
    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Bookshop</h1>
            <Navigation className="navigation" />
            <div className={styles.heder__blockUsers}>
                <Profile className="profile" />
                <ShoppingCart className="shop" />
            </div>
        </header>
    );
};

export default Header;
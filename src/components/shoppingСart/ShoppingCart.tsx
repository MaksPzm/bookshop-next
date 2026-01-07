import {ShoppingCartComponentProps} from "@/shared/interfaice/interfaice";
import {JSX} from "react";
import styles from "./shoppingCart.module.scss";
import Image from "next/image";
import SHOP from "@/../public/svg/shop bag.svg";

export const ShoppingCart = ( props: ShoppingCartComponentProps ): JSX.Element => {
    const { className } = props;
    return (
        <div className={`${className} ${styles.shopping}`}>
            <Image src={SHOP} alt={"shop bag"} className={styles.shopping__img} />
        </div>
    );
};
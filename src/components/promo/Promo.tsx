import styles from "./promo.module.scss";
import Image from "next/image";
import arrow from "@/../public/svg/arrow.svg"

export const Promo = () => {
    return (
        <>
            <div className={styles.promoOne}>
                <span className={styles.promoOne__text}>Change old book on new</span>
                <Image src={arrow} alt={arrow} className={styles.promoOne__arrow} />
            </div>
            <div className={styles.promoTwo}>
                <span className={styles.promoTwo__text}>top 100 books 2025</span>
                <Image src={arrow} alt={arrow} className={styles.promoTwo__arrow} />
            </div>
        </>
    );
};
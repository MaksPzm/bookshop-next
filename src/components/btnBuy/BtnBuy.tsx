"use client"
import {BtnBuyComponentProps} from "@/shared/interfaice/interfaice";
import styles from "./BtnBuy.module.scss";
export const BtnBuy = ( props: BtnBuyComponentProps ) => {
    const { dataBook, setDataBook, indexBook, children } = props;

    const handleClick = () => {
        const listDataBooks = [...dataBook];
        const shopCart = {...dataBook[indexBook], shopCart: !dataBook[indexBook].shopCart};
        localStorage.setItem("listBooksShopCart", JSON.stringify(shopCart));
        const newListDataBooks = [...listDataBooks.slice(0, indexBook), shopCart, ...listDataBooks.slice(indexBook + 1)];
        setDataBook(newListDataBooks);
    }
    return (
        <>
            <button type={"button"}
                    className={dataBook[indexBook].shopCart ? styles.blockDescription__btn_disabled : styles.blockDescription__btn}
                    onClick={() => handleClick()}>
                {children}
            </button>
        </>
    );
};
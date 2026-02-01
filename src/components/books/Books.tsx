"use client"
import styles from "./books.module.scss";
import {Book, BooksListComponentProps} from "@/shared/interfaice/interfaice";
import {BtnBuy} from "@/components/btnBuy/BtnBuy";
import {useState} from "react";

export const Books = ( props: BooksListComponentProps ) => {
    const { dataBook } = props;
    const arrayDataBook: Book[] = [...dataBook.items];
    const [newDataBook, setNewDataBook] = useState<Book[]>(arrayDataBook.map((book: Book) => {
        return {...book, shopCart: false};
    }));
    console.log("newDataBook", newDataBook);
    return (
        <>
            {newDataBook.map((book: Book, index: number) => (
                <div key={book.id} id={`${book.id}`} className={styles.book}>
                    <img src={`${book.volumeInfo.imageLinks.thumbnail}`} alt={book.volumeInfo.title} width={212} height={300} className={styles.book__img} />
                    <div className={styles.blockDescription}>
                        <span className={styles.blockDescription__text}>{book.volumeInfo.authors.map(authors => authors)}</span>
                        <h2 className={styles.blockDescription__name}>{book.volumeInfo.title}</h2>
                        <span className={`${styles.blockDescription__text} ${styles.blockDescription__review}`}>{book.volumeInfo.maturityRating === "NOT_MATURE" ? `The book's rating was not found` : `${book.volumeInfo.maturityRating} review`}</span>
                        <p className={`${styles.blockDescription__text} ${styles.blockDescription__description}`}>{book.volumeInfo.description}</p>
                        <span className={styles.blockDescription__price}>{book.saleInfo.listPrice ? `${book.saleInfo.listPrice.currencyCode} ${book.saleInfo.listPrice.amount}` : ''}</span>
                        <BtnBuy dataBook={newDataBook} setDataBook={setNewDataBook} indexBook={index} className={book.shopCart ? "blockDescription__btn_disabled" : "blockDescription__btn"} >
                            {book.shopCart ? "IN THE CART"  : "BUY NOW"}
                        </BtnBuy>
                    </div>
                </div>
            ))}
        </>
    );
};
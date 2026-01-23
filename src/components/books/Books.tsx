import { useSelector} from "react-redux";
import { BOOK_COVER } from "@/constants/books";
import Image from "next/image";
import styles from "./books.module.scss";
import {booksStore, booksStore as state} from "@/store/store";
import {Book, BooksList, BooksListComponentProps} from "@/shared/interfaice/interfaice";

export const Books = ( props: BooksListComponentProps ) => {
    const { dataBook } = props;
    // const myData = useSelector((state) => state)
    // console.log("myData", myData);
    return (
        <>
            {/*{BOOK_COVER.map(book => (*/}
            {/*    <div key={book.id} id={`${book.id}`} className={styles.book}>*/}
            {/*        <Image src={book.picture} alt={book.name} width={212} height={300} className={styles.book__img} />*/}
            {/*        <div className={styles.blockDescription}>*/}
            {/*            <span className={styles.blockDescription__text}>{book.author}</span>*/}
            {/*            <h2 className={styles.blockDescription__name}>{book.name}</h2>*/}
            {/*            <span className={`${styles.blockDescription__text} ${styles.blockDescription__review}`}>{`${book.reviews} review`}</span>*/}
            {/*            <p className={`${styles.blockDescription__text} ${styles.blockDescription__description}`}>{book.description}</p>*/}
            {/*            <span className={styles.blockDescription__price}>{`$${book.price}`}</span>*/}
            {/*            {!book.cart*/}
            {/*                ? <button type={"button"} className={styles.blockDescription__btn}>buy now</button>*/}
            {/*                : <button type={"button"} className={styles.blockDescription__btn_disabled} disabled={true}>In the cart</button>*/}
            {/*            }*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*))}*/}
            {dataBook.items.map((book: Book) => (
                <div key={book.id} id={`${book.id}`} className={styles.book}>
                    <img src={`${book.volumeInfo.imageLinks.thumbnail}`} alt={book.volumeInfo.title} width={212} height={300} className={styles.book__img} />
                    <div className={styles.blockDescription}>
                        {/*<span className={styles.blockDescription__text}>{book.volumeInfo.authors.map(authors => authors)}</span>*/}
                        <h2 className={styles.blockDescription__name}>{book.volumeInfo.title}</h2>
                        <span className={`${styles.blockDescription__text} ${styles.blockDescription__review}`}>{`${book.volumeInfo.maturityRating} review`}</span>
                        <p className={`${styles.blockDescription__text} ${styles.blockDescription__description}`}>{book.volumeInfo.description}</p>
                        {/*<span className={styles.blockDescription__price}>{`${book.saleInfo.listPrice.currencyCode}${book.saleInfo.listPrice.amount}`}</span>*/}
                        {/*{!book.cart*/}
                        {/*    ? <button type={"button"} className={styles.blockDescription__btn}>buy now</button>*/}
                        {/*    : <button type={"button"} className={styles.blockDescription__btn_disabled} disabled={true}>In the cart</button>*/}
                        {/*}*/}
                    </div>
                </div>
            ))}
        </>
    );
};
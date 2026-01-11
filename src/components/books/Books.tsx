import { BOOK_COVER } from "@/constants/books";
import Image from "next/image";
import styles from "./books.module.scss";

export const Books = () => {
    return (
        <>
            {BOOK_COVER.map(book => (
                <div key={book.id} id={`${book.id}`} className={styles.book}>
                    <Image src={book.picture} alt={book.name} width={212} height={300} className={styles.book__img} />
                    <div className={styles.blockDescription}>
                        <span className={styles.blockDescription__text}>{book.author}</span>
                        <h2 className={styles.blockDescription__name}>{book.name}</h2>
                        <span className={`${styles.blockDescription__text} ${styles.blockDescription__review}`}>{`${book.reviews} review`}</span>
                        <p className={`${styles.blockDescription__text} ${styles.blockDescription__description}`}>{book.description}</p>
                        <span className={styles.blockDescription__price}>{`$${book.price}`}</span>
                        {!book.cart
                            ? <button type={"button"} className={styles.blockDescription__btn}>buy now</button>
                            : <button type={"button"} className={styles.blockDescription__btn_disabled} disabled={true}>In the cart</button>
                        }
                    </div>
                </div>
            ))}
        </>
    );
};
import { ClassProps } from "@/shared/interfaice/interfaice";
import styles from "./bookShop.module.scss";
import {Categories} from "@/components/categories/Categories";
import {Books} from "@/components/books/Books";

const BookShop = ( props: ClassProps) => {
    const { className } = props;
    return (
        <div className={`${className} ${styles.bookShop}`}>
            <Categories className={"categories"} />
            <div className={styles.bookShop__books}>
                <Books />
                <button type="button" className={styles.bookShop__books_btn}>Load more</button>
            </div>
        </div>
    );
};

export default BookShop;
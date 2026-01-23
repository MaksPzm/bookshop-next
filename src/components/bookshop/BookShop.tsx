
import { ClassProps } from "@/shared/interfaice/interfaice";
import {Categories} from "@/components/categories/Categories";
import {Books} from "@/components/books/Books";
import styles from "./bookShop.module.scss";
import {Provider} from "react-redux";
import {booksStore, fetchBook} from "@/store/store";
import {GetStaticProps} from "next";

export const getStaticProps =  async () =>  {
    const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:Architecture&key=AIzaSyCvzFkuSjiZgJOh90lZaYuv9qUT2xypKNs&printType=books&startIndex=0&maxResults=6&langRestrict=en");
    const data = await res.json();
    console.log(data);
    return {
        props: {
            booksData: data,
        }
    }
}

export const fetchBooks = async (): Promise<void> => {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:Architecture&key=AIzaSyCvzFkuSjiZgJOh90lZaYuv9qUT2xypKNs&printType=books&startIndex=0&maxResults=6&langRestrict=en",);
    const data = await response.json();
    return data;
}

const BookShop = async ( props: any,) => {
    const dataBook = await fetchBooks();
    const { className, booksData } = props;
    console.log("data", dataBook);
    // fetchBook("https://www.googleapis.com/books/v1/volumes?q=subject:Architecture&key=AIzaSyCvzFkuSjiZgJOh90lZaYuv9qUT2xypKNs&printType=books&startIndex=0&maxResults=6&langRestrict=en")
    return (
        // <Provider store={booksStore}>
            <div className={`${className} ${styles.bookShop}`}>
                <Categories className={"categories"} />
                <div className={styles.bookShop__books}>
                    <Books dataBook={dataBook}/>
                    <button type="button" className={styles.bookShop__books_btn}>Load more</button>
                </div>
            </div>
        // </Provider>



    );
};

export default BookShop;
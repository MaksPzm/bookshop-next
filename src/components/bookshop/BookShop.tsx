import {BooksList} from "@/shared/interfaice/interfaice";
import {Categories} from "@/components/categories/Categories";
import {Books} from "@/components/books/Books";
import styles from "./bookShop.module.scss";

export const fetchBooks = async () => {
    const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:Architecture&key=AIzaSyCvzFkuSjiZgJOh90lZaYuv9qUT2xypKNs&printType=books&startIndex=0&maxResults=6&langRestrict=en",
        {
            cache: "force-cache", // метод SSG статическая подгрузка данных. Подгружаются лишь один раз. У ssr по дефолту no-cache и будет метод SSR
            next: {
                revalidate: 200 // метод ISG С какой частотой будет обновляться запрос на странице (200мсек)
            }
        }
        );
    return await response.json();
}

const BookShop = async ( props: any,) => {
    const dataBook: BooksList = await fetchBooks();
    const { className, booksData } = props;
    console.log("data", dataBook);
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
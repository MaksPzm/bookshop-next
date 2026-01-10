import { ClassProps } from "@/shared/interfaice/interfaice";
import styles from "./bookShop.module.scss";
import {Categories} from "@/components/categories/Categories";

const BookShop = ( props: ClassProps) => {
    const { className } = props;
    return (
        <div className={`${className} ${styles.bookShop}`}>
            <Categories className={"categories"} />
        </div>
    );
};

export default BookShop;
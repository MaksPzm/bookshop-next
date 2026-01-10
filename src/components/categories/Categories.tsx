"use client"
import {ClassProps} from "@/shared/interfaice/interfaice";
import styles from "./categories.module.scss"
import React, {useState, MouseEvent, MouseEventHandler} from "react";
import {CATEGORIES} from "@/constants/categoriesBook";
import {Category} from "@/shared/type/type";

export const Categories = ( { className }: ClassProps) => {
    const [categories, setCategories] = useState(CATEGORIES);
    const handleClick = (position: number, event: MouseEvent) => {
        event.preventDefault()
        const updatedCategories = categories.map((category: Category, index) => {
            category.selected = false;
            return index === position ? !category.selected : category.selected;
        });
        const newCategories = [...categories];
        newCategories[position].selected = updatedCategories[position];
        setCategories(newCategories);
    }
    return (
        <div className={`${className} ${styles.categories}`}>
            <ul className={styles.listCategories}>
                {categories.map((category, index) => (
                    <li key={category.id} id={category.id} className={`${styles.listCategories__item}`}>
                        <a href="#" className={`${styles.listCategories__link} ${category.selected && styles.listCategories__link_active}`} onClick={(event) => {handleClick(index, event) }}>
                            {category.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
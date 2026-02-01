import {ReactNode} from "react";


export interface ClassProps {
    className?: string;
}

export interface BannerSelectionBtnComponentProps {
    className?: string;
    indexImg: number;
    setIndexImg: (indexImg: number) => void;
}

export interface Book {
    id: string;
    saleInfo: {
        listPrice: {
            amount: number;
            currencyCode: string;
        },
        selfLink: string,
    }
    shopCart: boolean;
    volumeInfo: {
        title: string;
        authors: string[],
        categories: string[],
        description: string,
        imageLinks: {
            smallThumbnail: string,
            thumbnail: string,
        },
        infoLink: string,
        maturityRating: string,
        pageCount: number,
    }
}

export interface BooksList {
    items: Book[];

}


export interface BooksListComponentProps {
    dataBook: BooksList;
}

export interface BtnBuyComponentProps {
    dataBook: Book[];
    setDataBook: Function;
    indexBook: number;
    className?: string;
    children?: ReactNode;
}
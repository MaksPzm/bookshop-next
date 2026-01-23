import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    books: [],
    error: "",
};

// export const fetchBooks = createAsyncThunk("FETCH_BOOKS",
//     async () => {
//     return fetch("https://www.googleapis.com/books/v1/volumes?q=subject:Architecture&key=AIzaSyCvzFkuSjiZgJOh90lZaYuv9qUT2xypKNs&printType=books&startIndex=0&maxResults=6&langRestrict=en")
//         .then(res => res.json())
//         .then(data => data.map((book: any) => book));
//     })


export const fetchBook = (api: string) => async (dispatch: any) => {
    try {
        dispatch(dataBookshopSlice.actions.booksFetching);
        const response = await axios.get(api);
        console.log("data", response);
        dispatch(dataBookshopSlice.actions.booksFetchingSuccess(response));
    } catch (error) {
        dispatch(dataBookshopSlice.actions.booksFetchError(error));
    }
}


// const fetchBooks = createAsyncThunk(
//     'ETCH_BOOKS',
//     async (args, api) => {
//         const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=subject:Architecture&key=AIzaSyCvzFkuSjiZgJOh90lZaYuv9qUT2xypKNs&printType=books&startIndex=0&maxResults=6&langRestrict=en");
//
//         const data = await res.json();
//         return data;
//     }
// )


const dataBookshopSlice = createSlice({

    name: "books",
    initialState,
    reducers: {
        booksFetching(state) {
            state.loading = true;
        },
        booksFetchingSuccess(state, action) {
            state.loading = false;
            state.error = "";
            state.books = action.payload;
        },
        booksFetchError(state, action) {
            state.loading = false;
            state.error = action.payload;
        }
    },
    // extraReducers: builder => {
    //     builder
    //     .addCase(fetchBooks.pending, (state: any) => {
    //     state.loading = true;
    // })
    // .addCase(fetchBooks.fulfilled, (state: any, action: any) => {
    //     state.loading = false;
    //     state.books = action.payload;
    //     state.error = "";
    // })
    // .addCase(fetchBooks.rejected, (state: any, action: any) => {
    //     state.loading = false;
    //     state.books = [];
    //     state.error = action.error.message;
    // })
    // }
})

export const booksStore = configureStore({
    reducer: {
        books: dataBookshopSlice.reducer,
    }
})

// const boo =
// name: "books",
// initialState,
// extraReducers: (builder: any) => {
//     builder
//         .addCase(fetchBooks.pending, (state: any) => {
//         state.loading = true;
//     })
//     .addCase(fetchBooks.fulfilled, (state: any, action: any) => {
//         state.loading = false;
//         state.books = action.payload;
//         state.error = "";
//     })
//     .addCase(fetchBooks.rejected, (state: any, action: any) => {
//         state.loading = false;
//         state.books = [];
//         state.error = action.error.message;
//     })
// },
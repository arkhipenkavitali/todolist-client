import {configureStore} from "@reduxjs/toolkit";
import todosSlice from "./slices/todosSlice.ts";
import modalSlice from "./slices/modalSlice.ts";
import searchSlice from "./slices/searchSlice.ts";

export const store = configureStore({
    reducer: {
        todos: todosSlice,
	    modal: modalSlice,
	    filter: searchSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

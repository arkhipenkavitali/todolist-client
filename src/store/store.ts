import {configureStore} from "@reduxjs/toolkit";
import todosSlice from "./slices/todosSlice.ts";
import modalSlice from "./slices/modalSlice.ts";

export const store = configureStore({
    reducer: {
        todos: todosSlice,
	    modal: modalSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

import {configureStore} from "@reduxjs/toolkit";
import todosSlice from "./slices/todosSlice.ts";

export const store = configureStore({
    reducer: {
        todos: todosSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
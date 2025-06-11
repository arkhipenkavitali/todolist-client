import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SearchState {
	value: string;
}

const initialState: SearchState = {
	value: "",
}

const searchSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		setFilter(state, action: PayloadAction<string>) {
			state.value = action.payload;
		}
	}
})

export const {setFilter} = searchSlice.actions;
export default searchSlice.reducer;

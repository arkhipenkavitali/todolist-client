import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ModalState {
	id: number | null;
	data?: string;
}

const initialState: ModalState = {
	id: null,
	data: "",
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModal: (state, action: PayloadAction<number>) => {
			state.id = action.payload;
		},
		closeModal: (state) => {
			state.id = null;
		}
	}
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

import {useDispatch} from "react-redux";
import {closeModal} from "../../store/slices/modalSlice.ts";
import React from "react";

interface ConfirmModalProps {
	title: string;
	onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({onConfirm, title}) => {
	const dispatch = useDispatch();
	
	const handleConfirm = () => {
		onConfirm();
		dispatch(closeModal());
	}
	
	const handleReject = () => {
		dispatch(closeModal());
	}
	return (
		<div>
			<h2>{title}</h2>
			<div>
				<button onClick={handleConfirm}>Yes</button>
				<button onClick={handleReject}>No</button>
			</div>
		</div>
	);
};

export default ConfirmModal;

import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../store/slices/modalSlice.ts";
import React, {useEffect} from "react";
import {RootState} from "../../store/store.ts";

interface ConfirmModalProps {
	title: string;
	onConfirm: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({onConfirm, title}) => {
	const dispatch = useDispatch();
	const modalContent = useSelector((state: RootState) => state.modal.content);
	
	useEffect(() => {
		const handleModalCloseByEsc = (e: KeyboardEvent) => {
			if(e.key === 'Escape'){
				dispatch(closeModal());
			}
		}
		if(modalContent){
			document.addEventListener("keydown", handleModalCloseByEsc);
		}
		
		return () => {
			document.removeEventListener("keydown", handleModalCloseByEsc);
		}
	}, [modalContent, dispatch])
	
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

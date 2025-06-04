import {useDispatch, useSelector} from "react-redux";
import {closeModal} from "../../store/slices/modalSlice.ts";
import React, {useEffect} from "react";
import {RootState} from "../../store/store.ts";
import styles from "./ConfirmPopover.module.scss";
import Button from "../ui/Button/Button.tsx";

interface ConfirmModalProps {
	title: string;
	onConfirm: () => void;
}

const ConfirmPopover: React.FC<ConfirmModalProps> = ({onConfirm, title}) => {
	const dispatch = useDispatch();
	const confirmModalId = useSelector((state: RootState) => state.modal.id);
	
	useEffect(() => {
		const handleModalCloseByEsc = (e: KeyboardEvent) => {
			if(e.key === 'Escape'){
				dispatch(closeModal());
			}
		}
		if(confirmModalId){
			document.addEventListener("keydown", handleModalCloseByEsc);
		}
		
		return () => {
			document.removeEventListener("keydown", handleModalCloseByEsc);
		}
	}, [confirmModalId, dispatch])
	
	const handleConfirm = () => {
		onConfirm();
		dispatch(closeModal());
	}
	
	const handleReject = () => {
		dispatch(closeModal());
	}
	return (
		<div className={styles.confirmPopover}>
			<p>{title}</p>
			<div className={styles.confirmPopoverButtons}>
				<Button className={styles.confirmPopoverButtons} onClick={handleConfirm} text="Yes" />
				<Button className={styles.confirmPopoverButtons} onClick={handleReject} text="No" />
			</div>
		</div>
	);
};

export default ConfirmPopover;

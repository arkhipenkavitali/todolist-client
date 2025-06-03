import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import './ModalContainer.css';

const ModalContainer = () => {
	const modalContent = useSelector((state: RootState) => state.modal.content);
	if(!modalContent) return null;
	return (
		<div className="modal-backdrop">
			<div className="modal">{modalContent}</div>
		</div>
	);
};

export default ModalContainer;

import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import styles from './ModalContainer.module.scss';

const ModalContainer = () => {
    const modalContent = useSelector((state: RootState) => state.modal.data);
    if (!modalContent) return null;
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>{modalContent}</div>
        </div>
    );
};

export default ModalContainer;

import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import styles from './ModalContainer.module.scss';

const ModalContainer = () => {
    const modalContent = useSelector((state: RootState) => state.modal.content);
    if (!modalContent) return null;
    return (
        <div className={styles['modal-backdrop']}>
            <div className={styles.modal}>{modalContent}</div>
        </div>
    );
};

export default ModalContainer;

import DayColumn from "../DayColumn/DayColumn.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import styles from "./WeakBoard.module.scss";
import Subtitle from "../ui/Subtitle/Subtitle.tsx";

const WeakBoard = () => {
	const todos = useSelector((state: RootState) => state.todos.todos)
    return (
        <div className={styles.weakBoard}>
            <Subtitle text="Week board" />
	        <div className={styles.weakBoardGrid}>
		        <DayColumn todos={todos}/>
	        </div>
        </div>
    );
};

export default WeakBoard;

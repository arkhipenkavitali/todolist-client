import DayColumn from "../DayColumn/DayColumn.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import styles from "./WeakBoard.module.scss";
import Subtitle from "../ui/Subtitle/Subtitle.tsx";
import {Todo} from "../../store/types/todo.ts";

const WeakBoard = () => {
	const todos = useSelector((state: RootState) => state.todos.todos)
	const filterValue = useSelector((state: RootState) => state.filter.value)
	
	const filteredTodos = todos.filter((todo: Todo) => {
		return todo.text.toLowerCase().includes(filterValue.toLowerCase())
	})
	
	const completedTodos = todos.filter(el => el.isCompleted)
    return (
        <div className={styles.weakBoard}>
            <Subtitle text="Week board" />
	        {!todos.length ? (
		        <Subtitle text="No todos yet" size="medium" />
	        ) : !filteredTodos.length ? (
		        <Subtitle text="Nothing found" size="medium" />
	        ) : (
		        <Subtitle text={`Done: ${completedTodos.length}/${todos.length}`} size="small" />
	        )}
	        <div className={styles.weakBoardGrid}>
		        <DayColumn todos={filteredTodos}/>
	        </div>
        </div>
    );
};

export default WeakBoard;

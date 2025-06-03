import DayColumn from "../DayColumn/DayColumn.tsx";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

const WeakBoard = () => {
	const todos = useSelector((state: RootState) => state.todos.todos)
    return (
        <div>
            WeakBoard
            <DayColumn todos={todos}/>
        </div>
    );
};

export default WeakBoard;

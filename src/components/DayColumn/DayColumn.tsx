import {Todo} from "../../store/types/todo.ts";
import React from "react";

interface DayColumnProps {
	todos: Todo[]
}

const DayColumn: React.FC<DayColumnProps> = ({todos}) => {
    return (
        <ul>
	        {todos.map((todo: Todo) => <li key={todo.id}>{todo.text}</li>)}
        </ul>
    );
};

export default DayColumn;

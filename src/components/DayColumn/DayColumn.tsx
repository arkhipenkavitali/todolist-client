import {Todo} from "../../store/types/todo.ts";
import React from "react";
import TodoItem from "../TodoItem/TodoItem.tsx";

interface DayColumnProps {
	todos: Todo[]
}

const DayColumn: React.FC<DayColumnProps> = ({todos}) => {
    return (
        <ul>
	        {todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo}/>)}
        </ul>
    );
};

export default DayColumn;

import {Todo} from "../../store/types/todo.ts";
import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../store/slices/todosSlice.ts";

interface TodoItemProps {
	todo: Todo
}
const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
	const dispatch = useDispatch();
	return (
		<li>
			{todo.text}
			<button onClick={() => dispatch(deleteTodo(todo.id))}>x</button>
		</li>
	);
};

export default TodoItem;

import {Todo} from "../../store/types/todo.ts";
import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodo} from "../../store/slices/todosSlice.ts";
import {openModal} from "../../store/slices/modalSlice.ts";
import ConfirmModal from "../ConfirmModal/ConfirmModal.tsx";

interface TodoItemProps {
	todo: Todo
}
const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
	const dispatch = useDispatch();
	const onDeleteTodo = () => {
		dispatch(openModal(
			<ConfirmModal onConfirm={() => dispatch(deleteTodo(todo.id))} title="Хотите удалить todo" />
		))
	}
	return (
		<li>
			{todo.text}
			<button onClick={onDeleteTodo}>x</button>
		</li>
	);
};

export default TodoItem;

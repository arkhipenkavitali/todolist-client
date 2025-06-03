import {Todo} from "../../store/types/todo.ts";
import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, toggleComplete} from "../../store/slices/todosSlice.ts";
import {openModal} from "../../store/slices/modalSlice.ts";
import ConfirmModal from "../ConfirmModal/ConfirmModal.tsx";
import './TodoItem.css';

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
	const onCompletedTodo = () => {
		dispatch(toggleComplete(todo.id))
	}
	return (
		<li>
			<input type="checkbox" onChange={onCompletedTodo}/>
			<span className={todo.isCompleted ? "completed" : ""}>{todo.text}</span>
			<button onClick={onDeleteTodo}>x</button>
		</li>
	);
};

export default TodoItem;

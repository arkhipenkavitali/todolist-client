import {Todo} from "../../store/types/todo.ts";
import React from "react";
import {useDispatch} from "react-redux";
import {deleteTodo, toggleComplete} from "../../store/slices/todosSlice.ts";
import {openModal} from "../../store/slices/modalSlice.ts";
import ConfirmModal from "../ConfirmModal/ConfirmModal.tsx";
import styles from "./TodoItem.module.scss";

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
		<li className={styles.todoItem}>
			<div className={styles.todoItemCheck}>
				<input id={todo.id.toString()} className={styles.todoItemCheckInput} type="checkbox" onChange={onCompletedTodo}/>
				<label className={styles.todoItemCheckLabel} htmlFor={todo.id.toString()}></label>
			</div>
			<span className={todo.isCompleted ? styles.completed : ""}>{todo.text}</span>
			<button className={styles.todoItemButton} onClick={onDeleteTodo}>x</button>
		</li>
	);
};

export default TodoItem;

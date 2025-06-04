import {Todo} from "../../store/types/todo.ts";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleComplete} from "../../store/slices/todosSlice.ts";
import {openModal} from "../../store/slices/modalSlice.ts";
import styles from "./TodoItem.module.scss";
import {RootState} from "../../store/store.ts";
import Button from "../ui/Button/Button.tsx";
import ConfirmPopover from "../ConfirmPopover/ConfirmPopover.tsx";

interface TodoItemProps {
	todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
	const dispatch = useDispatch();
	const deleteTodoId = useSelector((state: RootState) => state.modal.id)
	const isConfirmModalOpen = deleteTodoId === todo.id;
	
	const onDeleteTodo = () => {
		dispatch(deleteTodo(todo.id))
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
			<Button className={styles.todoItemButton} variant="Secondary" text="x" onClick={() => dispatch(openModal(todo.id))} />
			{isConfirmModalOpen && (
				<ConfirmPopover onConfirm={onDeleteTodo} title="Are you sure?" />
			)}
		</li>
	);
};

export default TodoItem;

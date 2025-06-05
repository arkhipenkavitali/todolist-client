import {Todo} from "../../store/types/todo.ts";
import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleComplete, updateTodoText} from "../../store/slices/todosSlice.ts";
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
	const deleteTodoId = useSelector((state: RootState) => state.modal.id);
	const isConfirmModalOpen = deleteTodoId === todo.id;
	
	const [isEditing, setIsEditing] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	
	const onDeleteTodo = () => {
		dispatch(deleteTodo(todo.id));
	};
	
	const onCompletedTodo = () => {
		dispatch(toggleComplete(todo.id));
	};
	
	const onSaveEdit = () => {
		const newText = inputRef.current?.value.trim();
		if (newText && newText !== todo.text) {
			dispatch(updateTodoText({ id: todo.id, text: newText }));
		}
		setIsEditing(false);
	};
	
	const onEditToggle = () => {
		setIsEditing(true);
	};
	
	return (
		<li className={styles.todoItem}>
			<div className={styles.todoItemCheck}>
				<input id={todo.id.toString()} className={styles.todoItemCheckInput} type="checkbox" onChange={onCompletedTodo} checked={todo.isCompleted} />
				<label className={styles.todoItemCheckLabel} htmlFor={todo.id.toString()}></label>
			</div>
			
			{isEditing ? (
				<>
					<input
						ref={inputRef}
						defaultValue={todo.text}
						className={styles.todoItemEditInput}
						onKeyDown={(e) => {
							if (e.key === 'Enter') {
								onSaveEdit();
							}
						}}
						autoFocus
					/>
					<Button
						className={styles.todoItemButton}
						variant="Success"
						text="OK"
						onClick={onSaveEdit}
					/>
					<Button
						className={styles.todoItemButton}
						variant="Secondary"
						text="Cancel"
						onClick={() => {
							setIsEditing(false);
						}}
					/>
				</>
			) : (
				<span className={[styles.todoItemText, todo.isCompleted ? styles.completed : ""].join(' ')}>
					{todo.text}
				</span>
			)}
			
			<Button className={styles.todoItemButton} variant="Secondary" text="✎" onClick={onEditToggle} />
			<Button className={styles.todoItemButton} variant="Warning" text="x" onClick={() => dispatch(openModal(todo.id))} />
			
			{isConfirmModalOpen && (
				<ConfirmPopover onConfirm={onDeleteTodo} title="Are you sure?" />
			)}
		</li>
	);
};

export default TodoItem;

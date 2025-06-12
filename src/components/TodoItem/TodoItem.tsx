import {Todo} from "../../store/types/todo.ts";
import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleComplete, updateTodoText} from "../../store/slices/todosSlice.ts";
import {openModal} from "../../store/slices/modalSlice.ts";
import styles from "./TodoItem.module.scss";
import {RootState} from "../../store/store.ts";
import Button from "../ui/Button/Button.tsx";
import ConfirmPopover from "../ConfirmPopover/ConfirmPopover.tsx";
import MoreIcon from '../../assets/icons/more.svg?react';
import CheckIcon from '../../assets/icons/check.svg?react';
import clsx from "clsx";

interface TodoItemProps {
	todo: Todo
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
	const dispatch = useDispatch();
	const deleteTodoId = useSelector((state: RootState) => state.modal.id);
	const isConfirmModalOpen = deleteTodoId === todo.id;
	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
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
		setMenuOpen(false);
	};
	
	return (
		<li className={clsx(
			styles.todoItem,
			isMenuOpen || isConfirmModalOpen ? styles.todoItemDisabled : "",
			todo.isCompleted ? styles.todoItemCompleted : ""
		)}>
			{!isEditing && (
				<div className={styles.todoItemCheck}>
					<input disabled={isMenuOpen} id={todo.id.toString()} className={styles.todoItemCheckInput} type="checkbox" onChange={onCompletedTodo} checked={todo.isCompleted} />
					<label className={styles.todoItemCheckLabel} htmlFor={todo.id.toString()}>
						{todo.isCompleted && <CheckIcon className={styles.todoItemCheckIcon} width={21} fill="white" />}
					</label>
				</div>
			)}
			
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
						className={styles.todoItemButtonEdit}
						variant="Primary"
						text="OK"
						onClick={onSaveEdit}
					/>
					<Button
						className={styles.todoItemButtonEdit}
						variant="Warning"
						text="Cancel"
						onClick={() => {
							setIsEditing(false);
						}}
					/>
				</>
			) : (
				<span className={styles.todoItemText}>
					{todo.text}
				</span>
			)}
			
			{isMenuOpen && !isEditing && (
				<div className={clsx(
					styles.todoItemSettings,
					isMenuOpen ? styles.todoItemSettingsOpen : ""
				)}>
					<Button className={styles.todoItemButton} variant="Primary" text="✎" onClick={onEditToggle} />
					<Button className={styles.todoItemButton} variant="Warning" text="🗑️" onClick={() => {
						dispatch(openModal(todo.id));
						setMenuOpen(false)
					}} />
				</div>
			)}
			
			{!isEditing && (
				<MoreIcon className={styles.todoItemMoreIcon} onClick={() => setMenuOpen(prev => !prev)} width={24} />
			)}
			
			{isConfirmModalOpen && (
				<ConfirmPopover onConfirm={onDeleteTodo} title="Are you sure?" />
			)}
		</li>
	);
};

export default TodoItem;

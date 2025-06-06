import {useRef} from "react";
import Input from "../ui/Input/Input.tsx";
import React from "react";
import Button from "../ui/Button/Button.tsx";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/slices/todosSlice.ts";
import {Todo} from "../../store/types/todo.ts";
import styles from "./AddTodoForm.module.scss";
import Subtitle from "../ui/Subtitle/Subtitle.tsx";

const AddTodoForm = () => {
	const dispatch = useDispatch();
	const todoTitleRef = useRef<HTMLInputElement>(null);
	
	const createTodo = (value: string): Todo => {
		return {
			id: Date.now(),
			isCompleted: false,
			isImportant: false,
			text: value,
			createdAt: Date.now().toString()
		}
	}
	
	const submitNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const value: string = todoTitleRef.current?.value?.trim() ?? "";
		if(value) {
			dispatch(addTodo(createTodo(value)));
			todoTitleRef.current!.value = '';
		}
	}
    return (
        <form className={styles.addTodo} onSubmit={submitNewTodo}>
	        <Subtitle text="Create new todo here" size="small" />
            <Input ref={todoTitleRef} placeholder="Insert todo" />
	        <Button className={styles.addTodoBtn} text="Add to dashboard" />
        </form>
    );
};

export default AddTodoForm;

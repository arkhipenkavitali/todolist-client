import {useRef} from "react";
import Input from "../ui/Input/Input.tsx";
import React from "react";
import Button from "../ui/Button/Button.tsx";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/slices/todosSlice.ts";
import {Todo} from "../../store/types/todo.ts";

const AddTodoForm = () => {
	const dispatch = useDispatch();
	const todoTitleRef = useRef<HTMLInputElement>(null);
	
	const createTodo = (): Todo => {
		return {
			id: Math.random(),
			isCompleted: false,
			isImportant: false,
			text: todoTitleRef.current?.value || '',
			createdAt: Date.now().toString()
		}
	}
	
	const submitNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(addTodo(createTodo()));
		console.log(todoTitleRef.current?.value);
	}
    return (
        <form onSubmit={submitNewTodo}>
            <Input ref={todoTitleRef} placeholder="Insert todo" />
	        <Button text="Add" />
        </form>
    );
};

export default AddTodoForm;

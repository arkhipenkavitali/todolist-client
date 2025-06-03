import {useRef} from "react";
import Input from "../ui/Input/Input.tsx";
import React from "react";
import {Button} from "@mui/material"
// import Button from "../ui/Button/Button.tsx";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/slices/todosSlice.ts";
import {Todo} from "../../store/types/todo.ts";

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
		console.log(value)
	}
    return (
        <form onSubmit={submitNewTodo}>
            <Input ref={todoTitleRef} placeholder="Insert todo" />
	        <Button variant="contained" type="submit">Add todo</Button>
        </form>
    );
};

export default AddTodoForm;

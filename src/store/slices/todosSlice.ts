import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Todo} from "../types/todo.ts";

interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: []
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>){
            state.todos.push(action.payload)
        },
        deleteTodo(state, action: PayloadAction<number>) {
            state.todos = state.todos.filter((t) => t.id !== action.payload)
        },
        toggleComplete(state, action: PayloadAction<number>){
            const todo = state.todos.find(t => t.id === action.payload);
            if(todo){
                todo.isCompleted = !todo.isCompleted;
            }
        },
	    updateTodoText: (state, action: PayloadAction<{ id: number; text: string }>) => {
		    const { id, text } = action.payload;
		    const todo = state.todos.find((t) => t.id === id);
		    if (todo) {
			    todo.text = text;
		    }
	    }
    }
})

export const {addTodo, deleteTodo, toggleComplete, updateTodoText} = todosSlice.actions;
export default todosSlice.reducer;

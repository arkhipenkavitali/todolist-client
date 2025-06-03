import './App.css'
import AddTodoForm from "../AddTodoForm/AddTodoForm.tsx";
import WeakBoard from "../WeakBoard/WeakBoard.tsx";

function App() {
    return (
        <>
            <h1>Hello, TodoList</h1>
            <AddTodoForm/>
            <WeakBoard/>
        </>
    )
}

export default App

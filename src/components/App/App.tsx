import './App.css'
import AddTodoForm from "../AddTodoForm/AddTodoForm.tsx";
import WeakBoard from "../WeakBoard/WeakBoard.tsx";
import ModalContainer from "../ModalContainer/ModalContainer.tsx";

function App() {
    return (
        <>
	        <div className="app">
		        <h1>Hello, TodoList</h1>
		        <AddTodoForm/>
		        <WeakBoard/>
	        </div>
            <ModalContainer />
        </>
    )
}

export default App

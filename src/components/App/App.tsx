import './App.module.scss'
import AddTodoForm from "../AddTodoForm/AddTodoForm.tsx";
import WeakBoard from "../WeakBoard/WeakBoard.tsx";
import ModalContainer from "../ModalContainer/ModalContainer.tsx";
import Title from "../ui/Title/Title.tsx";

function App() {
    return (
        <>
	        <div className="app">
		        <Title text={'Hello, {name}'} />
		        <AddTodoForm/>
		        <WeakBoard/>
	        </div>
            <ModalContainer />
        </>
    )
}

export default App

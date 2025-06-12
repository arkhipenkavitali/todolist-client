import AddTodoForm from "../AddTodoForm/AddTodoForm.tsx";
import WeakBoard from "../WeakBoard/WeakBoard.tsx";
import ModalContainer from "../ModalContainer/ModalContainer.tsx";
import Title from "../ui/Title/Title.tsx";
import SearchTodo from "../SearchTodo/SearchTodo.tsx";
import styles from "./App.module.scss";

function App() {
    return (
        <>
            <div className={styles.app}>
                <Title text={'Hello, {name}'}/>
                <div className={styles.appTop}>
                    <AddTodoForm/>
                    <SearchTodo/>
                </div>
                <WeakBoard/>
            </div>
            <ModalContainer/>
        </>
    )
}

export default App

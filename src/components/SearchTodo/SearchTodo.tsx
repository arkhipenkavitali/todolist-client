import React from 'react';
import styles from './SearchTodo.module.scss';
import Subtitle from "../ui/Subtitle/Subtitle.tsx";
import Input from "../ui/Input/Input.tsx";

const SearchTodo: React.FC = () => {
    return (
        <div className={styles.searchTodo}>
            <Subtitle text="Search todo" size="small"/>
            <Input placeholder="Search..."/>
        </div>
    );
};

export default SearchTodo;
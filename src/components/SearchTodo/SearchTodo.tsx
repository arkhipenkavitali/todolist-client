import React from 'react';
import styles from './SearchTodo.module.scss';
import Subtitle from "../ui/Subtitle/Subtitle.tsx";
import Input from "../ui/Input/Input.tsx";
import {useDispatch} from "react-redux";
import {setFilter} from "../../store/slices/searchSlice.ts";

const SearchTodo: React.FC = () => {
	const dispatch = useDispatch();
	const onDebouncedChange = (value: string) => {
		dispatch(setFilter(value));
	}
    return (
        <div className={styles.searchTodo}>
            <Subtitle text="Search todo" size="small"/>
            <Input id="search" placeholder="Search..." onDebouncedChange={onDebouncedChange} />
        </div>
    );
};

export default SearchTodo;

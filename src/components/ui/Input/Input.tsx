import styles from "./Input.module.scss";
import React, {ChangeEvent, Ref, useEffect, useState} from "react";
import useDebounce from "../../../hooks/useDebounce.ts";

interface InputProps {
	id: string;
	placeholder: string;
	type?: string;
	inputRef?: Ref<HTMLInputElement>;
	value?: string;
	onDebouncedChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({placeholder, type = 'text', inputRef, id, onDebouncedChange}) => {
	const [value, setValue] = useState('');
	const debouncedValue = useDebounce(value, 300);
	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}
	useEffect(() => {
		if(!inputRef && onDebouncedChange){
			onDebouncedChange(debouncedValue);
		}
	}, [debouncedValue, onDebouncedChange, inputRef])
	if (inputRef) return <input id={id} className={styles.input} ref={inputRef} placeholder={placeholder} type={type} />;
	
	return <input id={id} className={styles.input} value={value} onChange={onInputChange} placeholder={placeholder} type={type} />;
};

export default Input;

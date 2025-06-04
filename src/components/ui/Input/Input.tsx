import {forwardRef} from "react";
import styles from "./Input.module.scss";

interface InputProps {
	type?: string;
	placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({placeholder, type = 'text'}, ref) => {
	return <input className={styles.input} ref={ref} placeholder={placeholder} type={type} />;
});

export default Input;

import {forwardRef} from "react";

interface InputProps {
	type?: string;
	placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({placeholder, type = 'text'}, ref) => {
	return <input ref={ref} placeholder={placeholder} type={type} />;
});

export default Input;

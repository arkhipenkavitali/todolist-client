import {forwardRef} from "react";
import {TextField, TextFieldProps} from "@mui/material";

interface InputProps extends Omit<TextFieldProps, 'variant'> {
	type?: string;
	placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({placeholder, type = 'text', ...restProps}, ref) => {
	return <TextField
		type={type}
		inputRef={ref}
		placeholder={placeholder}
		variant="outlined"
		fullWidth
		{...restProps}
		 />;
});

export default Input;

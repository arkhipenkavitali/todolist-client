import React from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "Primary" | "Secondary" | "Tertiary" | "Success" | "Warning" | "Danger";

interface ButtonProps {
	text: string;
	onClick?: () => void;
	className?: string;
	variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({text, onClick, variant = 'Primary', className = ''}) => {
	const baseClass = styles[`button${variant}`];
	const combinedClass = `${baseClass} ${className}`.trim();
	return (
		<button onClick={onClick} className={combinedClass}>{text}</button>
	);
};

export default Button;

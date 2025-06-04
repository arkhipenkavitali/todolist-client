import React from "react";
import styles from "./Title.module.scss"

interface TitleProps {
	text: string;
	size?: 'small' | 'medium' | 'large'
}

const Title: React.FC<TitleProps> = ({text, size = 'large'}) => {
	const sizeClassMap = {
		small: styles.titleSmall,
		medium: styles.titleMedium,
		large: styles.title,
	};
	
	const titleSize = sizeClassMap[size];
	
	return (
		<h1 className={titleSize}>{text}</h1>
	);
};

export default Title;

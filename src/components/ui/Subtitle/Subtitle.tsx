import styles from './Subtitle.module.scss'
import React, {JSX} from "react";

interface SubtitleProps {
	text: string;
	size?: 'small' | 'medium' | 'large';
}

const sizeMap = {
	large: { tag: 'h2', className: styles.subtitleLarge },
	medium: { tag: 'h3', className: styles.subtitleMedium },
	small: { tag: 'h4', className: styles.subtitleSmall },
};

const Subtitle: React.FC<SubtitleProps> = ({ text, size = 'large' }) => {
	const { tag, className } = sizeMap[size];
	const Tag = tag as keyof JSX.IntrinsicElements;
	
	return <Tag className={className}>{text}</Tag>;
};

export default Subtitle;

import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
    icon: React.ReactNode;
    text: string;
    value: string;
    onChange: (value: string) => void;
    className?: string;
    type?: string;
}

export default function Input({
    icon,
    text,
    className,
    value,
    onChange,
    type,
}: InputProps) {
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        onChange(newValue);
    };
    return (
        <div className={`${className} ${styles.inputContainer}`}>
            <div className={styles.iconContainer}>{icon}</div>
            <input
                type={type}
                placeholder={text}
                className={styles.input}
                value={value}
                onChange={handleTextChange}
            />
        </div>
    );
}

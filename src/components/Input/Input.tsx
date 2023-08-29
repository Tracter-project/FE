import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
    icon: React.ReactNode;
    text: string;
    onChange: (value: string) => void;
    className?: string;
}

export default function Input({ icon, text, className, onChange }: InputProps) {
    //string타입
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onChange(value);
    };
    return (
        <div className={`${className} ${styles.inputContainer}`}>
            <div className={styles.iconContainer}>{icon}</div>
            <input
                type="text"
                placeholder={text}
                className={styles.input}
                onChange={handleTextChange}
            />
        </div>
    );
}

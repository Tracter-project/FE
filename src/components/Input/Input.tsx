import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
    icon: React.ReactNode;
    text: string;
    className?: string;
}

export default function Input({ icon, text, className }: InputProps) {
    return (
        <div className={`${className} ${styles.inputContainer}`}>
            <div className={styles.iconContainer}>{icon}</div>
            <input type="text" placeholder={text} className={styles.input} />
        </div>
    );
}

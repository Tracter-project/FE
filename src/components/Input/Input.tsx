import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
    icon: React.ReactNode;
    text: string;
}

export default function Input({ icon, text }: InputProps) {
    return (
        <div className={styles.inputContainer}>
            <div className={styles.iconContainer}>{icon}</div>
            <input type="text" placeholder={text} className={styles.input} />
        </div>
    );
}

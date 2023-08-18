import React from "react";
import styles from "./Button.module.scss";
import Title from "../Title/Title";

interface ButtonProps {
    children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
    return (
        <>
            <button className={styles.button}>
                <Title size="p">{children}</Title>
            </button>
        </>
    );
}

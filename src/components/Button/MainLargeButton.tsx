import React from "react";
import styles from "./Button.module.scss";
import Title from "../Title/Title";

interface ButtonProps {
    children: React.ReactNode;
}

export default function MainLargeButton({ children }: ButtonProps) {
    return (
        <>
            <button className={styles.mainLargeButton}>
                <Title size="h5">{children}</Title>
            </button>
        </>
    );
}

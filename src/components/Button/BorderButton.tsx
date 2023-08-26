import React from "react";
import styles from "./Button.module.scss";
import Title from "../Title/Title";

interface BorderButtonProps {
    children: React.ReactNode;
}

export default function BorderButton({ children }: BorderButtonProps) {
    return (
        <>
            <button className={styles.borderbutton}>
                <Title size="p">{children}</Title>
            </button>
        </>
    );
}

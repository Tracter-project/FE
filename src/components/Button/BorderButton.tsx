import React from "react";
import styles from "./Button.module.scss";
import Title from "../Title/Title";

interface BorderButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

export default function BorderButton({ children, onClick }: BorderButtonProps) {
    return (
        <>
            <button className={styles.borderbutton} onClick={onClick}>
                <Title size="p">{children}</Title>
            </button>
        </>
    );
}

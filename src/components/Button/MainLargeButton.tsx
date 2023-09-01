import React from "react";
import styles from "./Button.module.scss";
import Title from "../Title/Title";
// import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

export default function MainLargeButton({ onClick, children }: ButtonProps) {
    return (
        <>
            <button className={styles.mainLargeButton} onClick={onClick}>
                <Title size="h5">{children}</Title>
            </button>
        </>
    );
}

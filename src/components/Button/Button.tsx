import React, { MouseEvent } from "react";
import styles from "./Button.module.scss";
import Title from "../Title/Title";

interface ButtonProps {
    children: React.ReactNode;
    onClick: (e?: MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
    return (
        <>
            <button
                className={`${className} ${styles.button}`}
                onClick={onClick}
            >
                <Title size="p">{children}</Title>
            </button>
        </>
    );
}

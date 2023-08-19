import React from "react";
import styles from "./Button.module.scss";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

interface ButtonProps {
    children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
    return (
        <>
            <button className={styles.button}>
                <Title size="p">
                    <Link to="/">{children}</Link>
                </Title>
            </button>
        </>
    );
}

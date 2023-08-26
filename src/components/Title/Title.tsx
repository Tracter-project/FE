import React from "react";
import styles from "./Title.module.scss";

interface TitleProps {
    size: "h1" | "h2" | "h3" | "h4" | "h5" | "b" | "p" | "sub";
    children: React.ReactNode;
    className?: string;
}

export default function Title({ size, children, className }: TitleProps) {
    const TitleTag = size;
    return (
        <TitleTag className={`${className} ${styles.title} ${styles[size]}`}>
            {children}
        </TitleTag>
    );
}

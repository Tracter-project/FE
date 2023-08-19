import React, { useState } from "react";
import { VscTriangleDown, VscTriangleUp } from "react-icons/vsc";
import styles from "./DropdownOption.module.scss";

interface DropdownOptionProps {
    title: string;
    children: React.ReactNode;
}

export default function DropdownOption({
    title,
    children,
}: DropdownOptionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className={`${styles.dropdownOption} ${
                isExpanded ? styles.expanded : ""
            }`}
            onClick={handleToggle}
        >
            <span>{title}</span>
            {isExpanded ? <VscTriangleUp /> : <VscTriangleDown />}
            {isExpanded && (
                <div
                    className={`${styles.optionContent} ${
                        isExpanded ? "show" : ""
                    }`}
                >
                    {children}
                </div>
            )}
        </div>
    );
}

import React from "react";
import styles from "./EditedInput.module.scss";

interface EditedInputProps {
    value: string;
    onChange: (newValue: string) => void;
}

export default function EditedInput({ value, onChange }: EditedInputProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };
    return (
        <>
            <input
                type="text"
                className={styles.editInput}
                value={value}
                onChange={handleChange}
            />
        </>
    );
}

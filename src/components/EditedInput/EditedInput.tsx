import React, { useState } from "react";
import styles from "./EditedInput.module.scss";
import Button from "../Button/Button";

interface EditedInputProps {
    value: string;
    onChange: (newValue: string) => void;
}

export default function EditedInput({ value, onChange }: EditedInputProps) {
    const [editing, setEditing] = useState(false);
    const [editedValue, setEditedValue] = useState(value);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedValue(e.target.value);
    };
    const handleSaveClick = () => {
        onChange(editedValue);
        setEditing(false);
    };
    return (
        <>
            <input
                type="text"
                id={styles.EditInput}
                value={editedValue}
                readOnly={!editing}
                onChange={handleInputChange}
            />
            {editing ? (
                <Button onClick={handleSaveClick}>저장</Button>
            ) : (
                <Button onClick={() => setEditing(true)}>수정</Button>
            )}
        </>
    );
}

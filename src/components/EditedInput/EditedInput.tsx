import React from 'react';
import styles from './EditedInput.module.scss';

interface EditedInputProps {
    value: string;
}

export default function EditedInput({ value }: EditedInputProps) {
    return (
        <>
            <input type="text" id={styles.EditInput} value={value} readOnly />
        </>
    );
}

import React, { useRef } from "react";
import Title from "../Title/Title";
import Button from "../Button/Button";
import styles from "./NewInput.module.scss";

interface NewInputProps {
    type: "file" | "text" | "number";
    onChange: (value: string | File | number | null) => void;
}

export default function NewInput({ type, onChange }: NewInputProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    //file타입
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        onChange(selectedFile || null);
    };

    //string타입
    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onChange(value);
    };

    //number타입
    const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.valueAsNumber;
        onChange(value);
    };

    return (
        <div className={styles.inputContainer}>
            {type === "file" ? (
                <div className={styles.fileWrap}>
                    <input
                        type="file"
                        id="fileInput"
                        className={styles.fileInput}
                        onChange={handleFileChange}
                        ref={fileInputRef}
                    />
                    <Button
                        className={styles.customFileButton}
                        onClick={handleFileButtonClick}
                    >
                        <Title size="p">파일 선택</Title>
                    </Button>
                </div>
            ) : type === "number" ? (
                <input
                    type="number"
                    className={styles.textInput}
                    onChange={handleNumberChange}
                />
            ) : (
                <input
                    type="text"
                    className={styles.textInput}
                    onChange={handleTextChange}
                />
            )}
        </div>
    );
}

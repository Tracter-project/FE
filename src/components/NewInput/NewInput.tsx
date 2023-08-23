import React, { useRef } from "react";
import Title from "../Title/Title";
import styles from "./NewInput.module.scss";

interface NewInputProps {
    type: "file" | "text";
    onChange: (value: string | File | null) => void;
}

export default function NewInput({ type, onChange }: NewInputProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        onChange(selectedFile);
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
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
                    <button
                        className={styles.customFileButton}
                        onClick={handleFileButtonClick}
                    >
                        <Title size="p">파일 선택</Title>
                    </button>
                </div>
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

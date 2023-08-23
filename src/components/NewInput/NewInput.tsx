import React, { useState } from "react";
import styles from "./NewInput.module.scss";

interface NewInputProps {
    type: "file" | "text";
    onChange: (value: string | File | null) => void;
}

export default function NewInput({ type, onChange }: NewInputProps) {
    const [inputValue, setInputValue] = useState<string | null>(null);
    const [selectedFileName, setSelectedFileName] = useState<string | null>(
        null
    );

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        setSelectedFileName(selectedFile ? selectedFile.name : null);
        onChange(selectedFile);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        onChange(value);
    };

    return (
        <div className={styles.inputContainer}>
            {type === "file" && (
                <>
                    <input
                        type="file"
                        className={styles.fileInput}
                        onChange={handleFileChange}
                    />
                    <label
                        htmlFor="fileInput"
                        className={styles.customFileInput}
                    >
                        {selectedFileName || "파일을 선택하세요"}
                    </label>
                </>
            )}
            {type === "text" && (
                <input
                    type="text"
                    className={styles.textInput}
                    value={inputValue || ""}
                    onChange={handleInputChange}
                />
            )}
        </div>
    );
}

// import React from "react";
import styles from "./DeleteButton.module.scss";
import { FaTrash } from "react-icons/fa";

interface DeleteButtonProps {
    onClick: () => void;
}
// onClick={}
export default function DeleteButton({ onClick }: DeleteButtonProps) {
    return (
        <>
            <button
                type="button"
                className={styles.deleteButton}
                onClick={onClick}
            >
                <FaTrash className={styles.trashIcon} />
            </button>
        </>
    );
}

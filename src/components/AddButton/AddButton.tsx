// import React from "react";
import styles from "./AddButton.module.scss";
import { FaPlus } from "react-icons/fa";

interface AddButtonProps {
    onClick: () => void;
}
// onClick={}
export default function AddButton({ onClick }: AddButtonProps) {
    return (
        <>
            <button
                type="button"
                className={styles.addButton}
                onClick={onClick}
            >
                <FaPlus className={styles.plusIcon} />
            </button>
        </>
    );
}

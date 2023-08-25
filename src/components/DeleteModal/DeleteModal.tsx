import React from "react";
import styles from "./DeleteModal.module.scss";
import { FaTimes } from "react-icons/fa";

interface DeleteModalProps {
    children: React.ReactNode;
    className: string;
}

export default function DeleteModal({ children, className }: DeleteModalProps) {
    return (
        <div className={styles.deleteModal}>
            <FaTimes className={styles.closeBtn} />
            <div className={className}>{children}</div>
        </div>
    );
}

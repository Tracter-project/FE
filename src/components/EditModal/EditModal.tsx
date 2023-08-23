import React from "react";
import styles from "./EditModal.module.scss";
import { FaTimes } from "react-icons/fa";

interface EditModalProps {
    children: React.ReactNode;
    className: string;
}

export default function EditModal({ children, className }: EditModalProps) {
    return (
        <div className={styles.editModal}>
            <FaTimes className={styles.closeBtn} />
            <div className={className}>{children}</div>
        </div>
    );
}

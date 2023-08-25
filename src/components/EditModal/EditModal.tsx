import React from "react";
import { useRecoilState } from "recoil";
import styles from "./EditModal.module.scss";
import { FaTimes } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { modalState } from "../../recoli/recoilAtoms";

interface EditModalProps {
  children: React.ReactNode;
  className: string;
}

export default function EditModal({ className }: EditModalProps) {
  const [modal, setModal] = useRecoilState(modalState);
  const closeModal = () => {
    setModal({ isOpen: false, content: null });
  };

  return (
    modal.isOpen && (
      <div className={styles.editModal}>
        <div className={styles.backDrop} onClick={closeModal}></div>
        <div className={styles.modalContent}>
          <button onClick={closeModal}>
            <FaTimes className={styles.closeBtn} />
          </button>
          <div className={className}>{modal.content}</div>
        </div>
      </div>
    )
  );
}

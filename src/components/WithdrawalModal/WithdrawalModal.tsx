import React from "react";
import styles from "./WithdrawalModal.module.scss";
import Title from "../Title/Title";
import Button from "../Button/Button";

interface ModalProps {
    children: React.ReactNode;
}

export default function WithdrawalModal({ children }: ModalProps) {
    return (
        <>
            <div className={styles.modalBox}>
                <Title size="h2">{children}</Title>
                <div className={styles.modalButton}>
                    {/* <Button>확인</Button>
          <Button>취소</Button> */}
                </div>
            </div>
        </>
    );
}

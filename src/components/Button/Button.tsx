import React from "react";
import styles from "./Button.module.scss";
import Title from "../Title/Title";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <>
      <button className={styles.button} onClick={onClick}>
        <Title size="p">{children}</Title>
      </button>
    </>
  );
}

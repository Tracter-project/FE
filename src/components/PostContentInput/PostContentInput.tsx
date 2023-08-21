import React, { ChangeEvent } from "react";
import styles from "./PostContentInput.module.scss";
import Title from "../Title/Title";

interface PostContentProps {
  contentInput: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function PostContentInput({
  contentInput,
  onChange,
}: PostContentProps) {
  return (
    <>
      <textarea
        className={styles.postContentInput}
        value={contentInput}
        onChange={onChange}
      />
    </>
  );
}

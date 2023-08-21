import { ChangeEvent } from "react";
import styles from "./PostTitleInput.module.scss";

interface PostContentProps {
  titleInput: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function PostTitleInput({
  titleInput,
  onChange,
}: PostContentProps) {
  return (
    <>
      <input
        type="text"
        className={styles.postTitleInput}
        value={titleInput}
        onChange={onChange}
      />
    </>
  );
}

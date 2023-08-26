import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import styles from "./PostContentInput.module.scss";
import { contentInput } from "../../recoli/recoilAtoms";

export default function PostContentInput() {
  const [postContentInput, setPostContentInput] = useRecoilState(contentInput);
  const handleContentInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPostContentInput(event.target.value);
  };

  return (
    <>
      <textarea
        className={styles.postContentInput}
        value={postContentInput}
        onChange={handleContentInput}
      />
    </>
  );
}

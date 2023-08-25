import { ChangeEvent } from "react";
import styles from "./PostContentInput.module.scss";
import { useRecoilState } from "recoil";
import { contentInput } from "../../recoil/recoilAtoms";

export default function PostContentInput() {
    const [postContentInput, setPostContentInput] =
        useRecoilState(contentInput);
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

import { ChangeEvent } from "react";
import styles from "./PostTitleInput.module.scss";
import { useRecoilState } from "recoil";
import { titleInput } from "../../recoli/recoilAtoms";

export default function PostTitleInput() {
    const [postTitleInput, setPostTitleInput] = useRecoilState(titleInput);
    const handleTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPostTitleInput(event.target.value);
    };

    return (
        <>
            <input
                type="text"
                className={styles.postTitleInput}
                value={postTitleInput}
                onChange={handleTitleInput}
            />
        </>
    );
}

import React, { ChangeEvent } from "react";
import styles from "./Comment.module.scss";
import Title from "../Title/Title";
import { useRecoilState } from "recoil";
import { commentInput } from "../../recoil/recoilAtoms";

interface CommentProps {
    children: React.ReactNode;
}

export default function Comment({ children }: CommentProps) {
    const [commentValue, setCommentValue] = useRecoilState(commentInput);

    const handleCommentValue = (event: ChangeEvent<HTMLInputElement>) => {
        setCommentValue(event.target.value);
    };

    const handleCommentSubmit = () => {
        alert(commentValue); // api
    };

    return (
        <>
            <div className={styles.commentBox}>
                <input
                    className={styles.commentInput}
                    value={commentValue}
                    onChange={handleCommentValue}
                ></input>
                <button
                    className={styles.commentButton}
                    onClick={handleCommentSubmit}
                >
                    <Title size="p">{children}</Title>
                </button>
            </div>
        </>
    );
}

import Title from "../../components/Title/Title";
import styles from "./PlaceAddPost.module.scss";
import { useNavigate } from "react-router-dom";
import PostTitleInput from "../../components/PostTitleInput/PostTitleInput";
import PostContentInput from "../../components/PostContentInput/PostContentInput";
import React, { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import RoundCheckbox from "../../components/ToggleCheckBox/ToggleCheckBoxSetting";

interface InputWrapProps {
  title: string;
  children: React.ReactNode;
}

export default function PlaceAddPost() {
  1;
  function InputWrap({ title, children }: InputWrapProps) {
    return (
      <div className={styles.inputWrap}>
        <Title size="b">{title}</Title>
        <div className={styles.inputBox}>{children}</div>
      </div>
    );
  }
  // TitleInput 상태관리
  // const [titleInput, setTitleInput] = useState("");
  // const handleTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
  //   setTitleInput(event.target.value);
  // };

  // // ContentInput 상태관리
  // const [contentInput, setContentInput] = useState("");
  // const handleContentInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
  //   setContentInput(event.target.value);
  // };

  // 작성하기 버튼
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert(`제목: ${titleInput}\n 내용: ${contentInput} 작성하기`); // post api
    // navigate("/community/list");
  };

  return (
    <div className={styles.addPostContainer}>
      <div className={styles.placeInfo}>
        <div className={styles.placeImg}>
          <img src="" alt="Place Image" />
        </div>
        <Title size="b">호텔 이름</Title>
      </div>
      <div className={styles.checkboxWrap}>
        <Title size="b">글머리</Title>
        <div className={styles.checkbox}>
          <RoundCheckbox label="후기" name="roundCheckbox1" />
          <RoundCheckbox label="질문" name="roundCheckbox1" />
        </div>
      </div>
      <InputWrap title="제목">
        <PostTitleInput></PostTitleInput>
      </InputWrap>
      <InputWrap title="내용">
        <PostContentInput></PostContentInput>
        <Button onClick={handleSubmit}>작성하기</Button>
      </InputWrap>
    </div>
  );
}

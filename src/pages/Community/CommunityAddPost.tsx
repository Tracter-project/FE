import Title from "../../components/Title/Title";
import styles from "./CommunityAddPost.module.scss";
import { useNavigate } from "react-router-dom";
import PostTitleInput from "../../components/PostTitleInput/PostTitleInput";
import PostContentInput from "../../components/PostContentInput/PostContentInput";
import React, { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import RoundCheckbox from "../../components/ToggleCheckBox/ToggleCheckBoxSetting";
import SearchPlace from "../../components/SearchPlace/SearchPlace";

interface InputWrapProps {
  title: string;
  children: React.ReactNode;
}

// 후기, 질문 => SearchPlace, Place MainImage, Place Title
// 기타 => (SearchPlace, Place MainImage, Place Title) 숨기기
export default function CommunityAddPost() {
  1;
  function InputWrap({ title, children }: InputWrapProps) {
    return (
      <div className={styles.inputWrap}>
        <Title size="b">{title}</Title>
        <div className={styles.inputBox}>{children}</div>
      </div>
    );
  }
  // serachPlace 상태관리
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // TitleInput 상태관리
  const [titleInput, setTitleInput] = useState("");
  const handleTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTitleInput(event.target.value);
  };

  // ContentInput 상태관리
  const [contentInput, setContentInput] = useState("");
  const handleContentInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContentInput(event.target.value);
  };

  // 작성하기 버튼
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert("작성하기 버튼 클릭"); // post api
    // navigate("/community/list");
  };

  return (
    <div className={styles.addPostContainer}>
      <SearchPlace
        searchInput={searchInput}
        onChange={handleSearchInput}
      ></SearchPlace>
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
          <RoundCheckbox label="기타" name="roundCheckbox1" />
        </div>
      </div>
      <InputWrap title="제목">
        <PostTitleInput
          onChange={handleTitleInput}
          titleInput={titleInput}
        ></PostTitleInput>
      </InputWrap>
      <InputWrap title="내용">
        <PostContentInput
          onChange={handleContentInput}
          contentInput={contentInput}
        ></PostContentInput>
        <Button onClick={handleSubmit}>작성하기</Button>
      </InputWrap>
    </div>
  );
}

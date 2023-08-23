import Title from "../../components/Title/Title";
import styles from "./CommunityAddPost.module.scss";
import { useNavigate } from "react-router-dom";
import PostTitleInput from "../../components/PostTitleInput/PostTitleInput";
import PostContentInput from "../../components/PostContentInput/PostContentInput";
import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import RoundCheckbox from "../../components/ToggleCheckBox/ToggleCheckBoxSetting";
import SearchPlace from "../../components/SearchPlace/SearchPlace";

export default function CommunityAddPost() {
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
    alert(`제목: ${titleInput}\n내용: ${contentInput}`); // post api
    navigate("/community/list");
  };

  // searchInput에 검색된 place 불러오기
  const place = {
    // 예시 데이터
    title: "00 카라반",
    mainImage:
      "https://yaimg.yanolja.com/v5/2023/07/11/16/640/64ad86a29096a7.09459065.jpg",
  };

  // 후기, 질문 => SearchPlace, Place MainImage, Place Title
  // 기타 => (SearchPlace, Place MainImage, Place Title) 숨기기
  return (
    <div className={styles.addPostContainer}>
      <div className={styles.addPostHead}>
        <Title size="h2">글 작성</Title>
      </div>
        <SearchPlace
          searchInput={searchInput}
          onChange={handleSearchInput}
        ></SearchPlace>
      <div className={styles.placeInfo}>
        <img src={place.mainImage} alt="Place Image" />
        <Title size="b">{place.title}</Title>
      </div>
      <div className={styles.checkboxWrap}>
        <Title size="b">글머리</Title>
        <div className={styles.checkbox}>
          <RoundCheckbox label="후기" name="roundCheckbox1" />
          <RoundCheckbox label="질문" name="roundCheckbox1" />
          <RoundCheckbox label="기타" name="roundCheckbox1" />
        </div>
      </div>
      <div className={styles.inputWrap}>
        <Title size="b">제목</Title>
        <div className={styles.inputBox}>
          <PostTitleInput
            onChange={handleTitleInput}
            titleInput={titleInput}
          ></PostTitleInput>
        </div>
      </div>
      <div className={styles.inputWrap}>
        <Title size="b">내용</Title>
        <div className={styles.inputBox}>
          <PostContentInput
            onChange={handleContentInput}
            contentInput={contentInput}
          ></PostContentInput>
          <Button onClick={handleSubmit}>작성하기</Button>
        </div>
      </div>
    </div>
  );
}

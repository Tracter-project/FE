import Title from "../../components/Title/Title";
import styles from "./PlaceAddPost.module.scss";
import { useNavigate, useParams } from "react-router-dom";
import PostTitleInput from "../../components/PostTitleInput/PostTitleInput";
import PostContentInput from "../../components/PostContentInput/PostContentInput";
import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import RoundCheckbox from "../../components/ToggleCheckBox/ToggleCheckBoxSetting";

export default function PlaceAddPost() {
  const params = useParams();

  const placeId = Number(params.placeId);
  console.log(placeId, typeof placeId);

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
  // const navigate = useNavigate();
  const handleSubmit = () => {
    alert(`제목: ${titleInput}\n내용: ${contentInput}`); // post api
    // navigate("/community/list");
  };

  // api ->  place = placeId로 Place 이미지, 숙소명
  const place = {
    // 예시 데이터
    title: "00 카라반",
    mainImage:
      "https://yaimg.yanolja.com/v5/2023/07/11/16/640/64ad86a29096a7.09459065.jpg",
  };

  return (
    <div className={styles.addPostContainer}>
      <div className={styles.placeInfo}>
        <img src={place.mainImage} alt="Place Image" />
        <Title size="b">{place.title}</Title>
      </div>
      <div className={styles.checkboxWrap}>
        <Title size="b">글머리</Title>
        <div className={styles.checkbox}>
          <RoundCheckbox label="후기" name="roundCheckbox1" />
          <RoundCheckbox label="질문" name="roundCheckbox1" />
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

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Title from "../../components/Title/Title";
import styles from "./PlaceAddPost.module.scss";
import PostTitleInput from "../../components/PostTitleInput/PostTitleInput";
import PostContentInput from "../../components/PostContentInput/PostContentInput";
import Button from "../../components/Button/Button";
import { titleInput } from "../../recoli/recoilAtoms";
import { contentInput } from "../../recoli/recoilAtoms";
import RadioButton from "../../components/RadioButton/RadioButton";

const subjects = ["후기", "질문"];

// Article(post)
// interface Article {
//   subject: string;
//   writer: string;
//   title: string;
//   contents: string;
// }

export default function PlaceAddPost() {
  const params = useParams();
  const placeId = Number(params.placeId);
  console.log(placeId, typeof placeId);

  const [selectedSubject, setSelectedSubject] = useState<string>(""); // selectedSubject === subject
  const newTitleInput = useRecoilValue(titleInput); // title
  const newContentInput = useRecoilValue(contentInput); // contents

  const handleRegionChange = (subject: string) => {
    setSelectedSubject(subject);
  };

  // 작성하기 버튼
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert(`제목: ${newTitleInput}\n내용: ${newContentInput}`); // post api
    navigate("/community/list");
  };

  // api ->  place = placeId로 Place 이미지, 숙소명
  const place = {
    // 예시 데이터
    title: "00 카라반",
    mainImage:
      "https://yaimg.yanolja.com/v5/2023/07/11/16/640/64ad86a29096a7.09459065.jpg",
  };

  return (
    <>
      <div className={styles.addPostContainer}>
        <div className={styles.addPostHead}>
          <Title size="h2">글 작성</Title>
        </div>
        <div className={styles.placeInfo}>
          <img src={place.mainImage} alt="Place Image" />
          <Title size="b">{place.title}</Title>
        </div>
        <div className={styles.checkboxWrap}>
          <Title size="b">글머리</Title>
          <div className={styles.checkbox}>
            {subjects.map((subject) => (
              <RadioButton
                key={subject}
                label={subject}
                checked={selectedSubject === subject}
                onChange={() => handleRegionChange(subject)}
              />
            ))}
          </div>
        </div>
        <div className={styles.inputWrap}>
          <Title size="b">제목</Title>
          <div className={styles.inputBox}>
            <PostTitleInput></PostTitleInput>
          </div>
        </div>
        <div className={styles.inputWrap}>
          <Title size="b">내용</Title>
          <div className={styles.inputBox}>
            <PostContentInput></PostContentInput>
            <Button onClick={handleSubmit}>작성하기</Button>
          </div>
        </div>
      </div>
    </>
  );
}

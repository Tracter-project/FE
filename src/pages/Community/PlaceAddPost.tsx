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
import axiosRequest from "../../api";

interface IArticle {
  subject: string;
  writer: string;
  title: string;
  content: string;
  placeImage: string;
}

const subjects = ["후기", "질문"];

export default function PlaceAddPost() {
  const params = useParams();
  const placeId = Number(params.placeId);
  console.log(placeId, typeof placeId);
  const [selectedSubject, setSelectedSubject] = useState<string>(""); // selectedSubject === subject
  const newTitleInput = useRecoilValue(titleInput); // title
  const newContentInput = useRecoilValue(contentInput); // contents

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject);
  };

  // api ->  place = placeId로 Place 이미지, 숙소명 조회하기  (useEffect)
  const place = {
    // 예시 데이터
    title: "00 카라반",
    mainImage:
      "https://yaimg.yanolja.com/v5/2023/07/11/16/640/64ad86a29096a7.09459065.jpg",
  };

  // 작성하기 버튼
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const article = {
        subject: selectedSubject,
        writer: "",
        title: newTitleInput,
        content: newContentInput,
        // placeImage: place.mainImage,
      };

      const response = await axiosRequest.requestAxios<IArticle>(
        "post",
        "/articles",
        article
      );

      console.log(response);
      alert("게시글이 등록되었습니다.");
    } catch (error) {
      console.error(error);
    }

    navigate("/community/list");
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
                onChange={() => handleSubjectChange(subject)}
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

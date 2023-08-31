import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";
import PostTitleInput from "../../components/PostTitleInput/PostTitleInput";
import PostContentInput from "../../components/PostContentInput/PostContentInput";
import Button from "../../components/Button/Button";
import SearchPlace from "../../components/SearchPlace/SearchPlace";
import { searchedData, titleInput } from "../../recoli/recoilAtoms";
import { contentInput } from "../../recoli/recoilAtoms";
import Title from "../../components/Title/Title";
import styles from "./CommunityAddPost.module.scss";
import RadioButton from "../../components/RadioButton/RadioButton";
import axiosRequest from "../../api";

interface IArticle {
  subject: string;
  writer: string;
  title: string;
  content: string;
  placeImage: string;
}

const subjects = ["후기", "질문", "기타"];

export default function CommunityAddPost() {
  const navigate = useNavigate();
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const [selectedSubject, setSelectedSubject] = useState<string>(""); // subject
  const newTitleInput = useRecoilValue(titleInput); // title
  const newContentInput = useRecoilValue(contentInput); // contents

  const handleRegionChange = (subject: string) => {
    setSelectedSubject(subject);
  };

  // searchInput에 검색된 place 불러오기
  const searchedPlace = useRecoilValue(searchedData);
  console.log("searchedPlace : ", searchedPlace);

  // 게시글 작성 API
  const handleSubmit = async () => {
    try {
      if (selectedSubject && newTitleInput && newContentInput) {
        if (selectedSubject !== "기타" && !searchedPlace.mainImage) {
          alert("후기 또는 질문을 남길 숙소를 선택해주세요.");

          return;
        }

        const article = {
          subject: selectedSubject,
          title: newTitleInput,
          contents: newContentInput,
          placeImage: searchedPlace.mainImage,
          token: token,
        };

        const response = await axiosRequest.requestAxios<IArticle>(
          "post",
          "/articles",
          article
        );

        console.log(response);
        alert("게시글이 등록되었습니다.");
        navigate("/community/list");
      } else {
        alert("모든 내용이 입력 되었는지 확인해주세요.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.addPostContainer}>
      <div className={styles.addPostHead}>
        <Title size="h2">글 작성</Title>
      </div>

      {selectedSubject !== "기타" && (
        <div>
          <SearchPlace></SearchPlace>
          {searchedPlace.mainImage && (
            <div className={styles.placeInfo}>
              <img src={searchedPlace.mainImage} alt="Place Image" />
              <Title size="b">{searchedPlace.placeName}</Title>
            </div>
          )}
        </div>
      )}

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
  );
}

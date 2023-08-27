import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
// import axiosRequest from "../../api";

const subjects = ["후기", "질문", "기타"];

export default function CommunityAddPost() {
  const [selectedSubject, setSelectedSubject] = useState<string>(""); // subject
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

  // searchInput에 검색된 place 불러오기
  const searchedPlace = useRecoilValue(searchedData);

  return (
    <div className={styles.addPostContainer}>
      <div className={styles.addPostHead}>
        <Title size="h2">글 작성</Title>
      </div>

      {selectedSubject !== "기타" && (
        <div>
          <SearchPlace></SearchPlace>
          {searchedPlace.imageUrl && (
            <div className={styles.placeInfo}>
              <img src={searchedPlace.imageUrl} alt="Place Image" />
              <Title size="b">{searchedPlace.title}</Title>
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

// Article(post)
// interface Article {
//   subject: string;
//   writer: string;
//   title: string;
//   contents: string;
// }

// useEffect(() => {
//   const submitArticle = async () => {
//     try {
//       await axiosRequest.requestAxios("post", "/articles", {
//         subject: selectedSubject,
//         writer: "", // 현재 유저 닉네임
//         title: newTitleInput,
//         contents: newContentInput,
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   };
// }, []);

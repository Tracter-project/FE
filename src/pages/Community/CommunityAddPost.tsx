import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import PostTitleInput from "../../components/PostTitleInput/PostTitleInput";
import PostContentInput from "../../components/PostContentInput/PostContentInput";
import Button from "../../components/Button/Button";
import SearchPlace from "../../components/SearchPlace/SearchPlace";
import { titleInput } from "../../recoilAtoms";
import { contentInput } from "../../recoilAtoms";
import { searchPlace } from "../../recoilAtoms";
import Title from "../../components/Title/Title";
import styles from "./CommunityAddPost.module.scss";

export default function CommunityAddPost() {
  const newTitleInput = useRecoilValue(titleInput);
  const newContentInput = useRecoilValue(contentInput);
  const newSerachInput = useRecoilValue(searchPlace);

  // 작성하기 버튼
  const navigate = useNavigate();
  const handleSubmit = () => {
    alert(`제목: ${newTitleInput}\n내용: ${newContentInput}`); // post api
    alert(`${newSerachInput}`); // test
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
      <SearchPlace></SearchPlace>
      <div className={styles.placeInfo}>
        <img src={place.mainImage} alt="Place Image" />
        <Title size="b">{place.title}</Title>
      </div>
      <div className={styles.checkboxWrap}>
        <Title size="b">글머리</Title>
        <div className={styles.checkbox}>
          {/* <RoundCheckbox label="후기" name="roundCheckbox1" />
          <RoundCheckbox label="질문" name="roundCheckbox1" />
          <RoundCheckbox label="기타" name="roundCheckbox1" /> */}
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

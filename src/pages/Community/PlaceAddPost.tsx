import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
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

interface IResponse {
  data: IPlace;
}

interface IPlace {
  id: number;
  placeName: string;
  price: number;
  description: string;
  region: string;
  placeLikeCount: number;
  bannerImage: string;
  mainImage: string;
  detailImage: string;
  bookingURL: string;
  category: string;
}

const subjects = ["후기", "질문"];

export default function PlaceAddPost() {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const params = useParams();
  const placeId = Number(params.placeId);

  const [place, setPlace] = useState<IPlace | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string>("");
  const newTitleInput = useRecoilValue(titleInput);
  const newContentInput = useRecoilValue(contentInput);

  const handleSubjectChange = (subject: string) => {
    setSelectedSubject(subject);
  };

  // api ->  place = placeId로 Place 이미지, 숙소명 조회하기
  useEffect(() => {
    const fetchArticleDetails = async () => {
      try {
        console.log("parmas: ", placeId);
        const response = await axiosRequest.requestAxios<IResponse>(
          "get",
          `/places/${placeId}`
        );

        if (response.data) {
          setPlace(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchArticleDetails();
  }, [placeId]);

  // 게시글 작성 API
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      const article = {
        subject: selectedSubject,
        title: newTitleInput,
        content: newContentInput,
        placeImage: place?.mainImage,
        token: token,
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
          <img src={place?.mainImage} alt="Place Image" />
          <Title size="b">{place?.placeName}</Title>
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

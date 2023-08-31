// import Comment from "../components/Comment/Comment";
// import CommentView from "../components/CommentView/CommentView";
// // import AddButton from "../components/AddButton/AddButton";
// // import DeleteButton from "../components/DeleteButton/DeleteButton";
// // import ModifyButton from "../components/ModifyButton/ModifyButton";
// // import LikeButton from "../components/LikeButton/LikeButton";
// import PostTitleInput from "../components/PostTitleInput/PostTitleInput";
// import PostContentInput from "../components/PostContentInput/PostContentInput";
// import SearchPlace from "../components/SearchPlace/SearchPlace";
// import PostList from "../components/PostList/PostList";
// import { useState, ChangeEvent } from "react";
// // import { useNavigate } from "react-router-dom";

// interface IPost {
//   id: number;
//   subject: string;
//   writer: string;
//   title: string;
//   contents: string;
//   postLikeCount: number;
//   commentsCount: number;
//   date: string;
//   placeImage: string;
// }

// interface IComment {
//   id: number;
//   writer: string;
//   comment: string;
//   date: string;
// }

// export default function Sol() {
//   const dummyPostList: IPost[] = [
//     {
//       id: 1,
//       subject: "질문",
//       writer: "이뽀리",
//       title: "글 제목",
//       contents: "내용입니다",
//       postLikeCount: 90,
//       commentsCount: 20,
//       date: "1일 전",
//       placeImage:
//         "https://yaimg.yanolja.com/v5/2023/07/11/16/640/64ad86a29096a7.09459065.jpg",
//     },
//     {
//       id: 100,
//       subject: "기타",
//       writer: "이뽀리",
//       title: "글 제목",
//       contents: "dfasdfsdrsdfasdrsdfasdsarsfasdrdsrsadfasdfsd",
//       postLikeCount: 90,
//       commentsCount: 20,
//       date: "1일 전",
//       placeImage: "",
//     },
//   ];

//   const dummyCommentList: IComment[] = [
//     {
//       id: 1,
//       writer: "이뽀리",
//       comment: "댓글ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
//       date: new Date("2023-08-19T15:45:00").toLocaleString(),
//     },
//     {
//       id: 2,
//       writer: "이뽀리",
//       comment:
//         "댓글ㄹㄹㄹㄹㄹㄹㄹㄹdfasdfsdfasdㅁㅇㄴㄹㅇㄴㅁㄱㄴㄹㅁㄴㅇㄱㄴㄹㅁㄴㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄱㄴㅇㄹㅊㅁㄴㅇㄱㄴㅇㄱㄹㄹㄹ",
//       date: new Date("2023-08-19T15:45:00").toLocaleString(),
//     },
//   ];

//   //CommentSubmit
//   const [commentInput, setCommentInput] = useState("");

//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setCommentInput(event.target.value);
//   };

//   const handleCommentSubmit = () => {
//     alert(commentInput); // api
//   };

//   // AddButton - (1) 글 작성 페이지로 이동
//   // const navigate = useNavigate();
//   // const handleAddButton = () => {
//   //   navigate("/community/addpost");
//   // };

//   // postTitleInput
//   const [titleInput, setTitleInput] = useState("");
//   const handleTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
//     setTitleInput(event.target.value);
//   };

//   // postContentInput
//   const [contentInput, setContentInput] = useState("");
//   const handleContentInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
//     setContentInput(event.target.value);
//   };

//   // serachPlace
//   const [searchInput, setSearchInput] = useState("");
//   const handleSearchInput = (event: ChangeEvent<HTMLInputElement>) => {
//     setSearchInput(event.target.value);
//   };

//   // TitleInput 상태관리
//   // const [titleInput, setTitleInput] = useState("");
//   // const handleTitleInput = (event: ChangeEvent<HTMLInputElement>) => {
//   //   setTitleInput(event.target.value);
//   // };

//   // ContentInput 상태관리
//   // const [contentInput, setContentInput] = useState("");
//   // const handleContentInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
//   //   setContentInput(event.target.value);
//   // };
//   return (
//     <>
//       {/* <LikeButton onClick={handleModifyButton}></LikeButton> */}
//       {/* <AddButton onClick={handleAddButton}></AddButton> */}
//       {/* <ModifyButton onClick={handleModifyButton}></ModifyButton> */}
//       {/* <DeleteButton onClick={handleDeleteButton}></DeleteButton> */}
//       {/* <CommentView commentList={dummyCommentList}></CommentView>
//       <Comment
//         commentInput={commentInput}
//         onChange={handleInputChange}
//         onClick={handleCommentSubmit}
//       >
//         댓글 작성
//       </Comment>
//       <PostTitleInput
//         onChange={handleTitleInput}
//         titleInput={titleInput}
//       ></PostTitleInput>
//       <PostContentInput
//         onChange={handleContentInput}
//         contentInput={contentInput}
//       ></PostContentInput>
//       <SearchPlace
//         searchInput={searchInput}
//         onChange={handleSearchInput}
//       ></SearchPlace>
//       <PostList postList={dummyPostList}></PostList> */}
//     </>
//   );
// }

// function Test() {
//   let hotel = 0;
//   let poolVilla = 0;
//   let glamping = 0;
//   let caravan = 0;
//   let guestHouse = 0;

//   // question[0].up 클릭시 => guestHouse += 3,
//   // question[0].down 클릭시 =>  poolVilla += 2, hotel += 2

//   const question = {
//     1: {
//       title: "1. 당신이 여행을 가는 이유는 무엇인가요?",
//       up: "새로운 문화와 사람들을 경험하기 위해서",
//       down: "온전한 휴식을 즐기기 위해서",
//     },
//     2: {
//       title: "2. 다음 중 어떤 타입을 선호 하시나요?",
//       up: "소중한 사람들과 함께 하는 여행",
//       down: "혼자 여유를 즐기며 떠나는 여행",
//     },
//     3: {
//       title: "이동이 많고 활동적인 여행을 선호 하시나요?",
//       up: "예",
//       down: "아니오",
//     },
//     4: {
//       title: "다음 중 어떤 곳을 선호 하시나요?",
//       up: "'의식주 해결이 편한 건물숲 도시",
//       down: "편의 시설이 멀리 떨어져 있지만 아름다운 시골",
//     },
//     5: {
//       title: "다음 중 어떤 타입을 선호 하시나요?",
//       up: "야외에서 자연을 느낄 수 있는 여행",
//       down: "실내에서 아늑하게 보내는 여행",
//     },
//     6: {
//       title: "여행 중에 가장 큰 즐거움을 느끼는 상황은 무엇인가요?",
//       up: "낯선 환경이 주는 새로움",
//       down: "안정감을 느낄 수 있는 편안한 환경",
//     },
//     7: {
//       title: "여행에서 기대하는 가장 큰 점은 무엇인가요?",
//       up: "새로운 사람들과 인연을 맺으며 세계를 더 넓게 바라 보는 것",
//       down: "일상에서 벗어난 나만의 시간",
//     },
//     8: {
//       title: "다음 중 어떤 타입을 선호 하시나요?",
//       up: "넓고 럭셔리한 분위기의 공간",
//       down: "다소 좁더라도 아늑함을 주는 공간",
//     },
//     9: {
//       title: "여행 중 낯선 장소에서 당신은 어떻게 행동할까요?",
//       up: "새로운 사람에게 말을 걸어본다",
//       down: "함께 여행 중인 일행과 이야기한다",
//     },
//     10: {
//       title: "여행 도중 가장 큰 목표는 무엇인가요?",
//       up: "새로운 경험을 통한 자아 발전",
//       down: "스트레스를 풀 수 있는 여유로운 시간",
//     },
//   };

// }

// QnA
// '1. 당신이 여행을 가는 이유는 무엇인가요?
// - 새로운 문화와 사람들을 경험하기 위해서 => 게스트하우스 1점
// - 온전한 휴식을 즐기기 위해서 => 풀빌라 1점, 호캉스 1점
// 2. 다음 중 어떤 타입을 선호 하시나요?
// - 소중한 사람들과 함께 하는 여행 => 글램핑 1점, 풀빌라 1점
// - 혼자 여유를 즐기며 떠나는 여행 => 호캉스 1점
// 3. 이동이 많고 활동적인 여행을 선호 하시나요?
// - 예 => 카라반 1점, 글램핑 1점, 게스트하우스 1점
// - 아니오 => 호캉스 1점, 풀빌라 1점
// 4. 다음 중 어떤 곳을 선호 하시나요?
// - 의식주 해결이 편한 건물숲 도시 => 호캉스, 풀빌라 1점
// - 편의 시설이 멀리 떨어져 있지만 아름다운 시골 => 글램핑, 카라반 1점
// 5. 다음 중 어떤 타입을 선호 하시나요?
// - 야외에서 자연을 느낄 수 있는 여행 => 글램핑, 카라반 1점
// - 실내에서 아늑하게 보내는 여행 => 호캉스, 풀빌라 1점
// 6. 여행 중에 가장 큰 즐거움을 느끼는 상황은 무엇인가요?
// - 낯선 환경이 주는 새로움 => 게스트하우스 1점,  글램핑, 카라반 1점
// - 안정감을 느낄 수 있는 편안한 환경 => 호캉스, 풀빌라 1점
// 7. 여행에서 기대하는 가장 큰 점은 무엇인가요?
// - 새로운 사람들과 인연을 맺으며 세계를 더 넓게 바라 보는 것 => 게스트하우스 1점, 글램핑 1점
// - 일상에서 벗어난 나만의 시간 => 호캉스, 풀빌라, 카라반 1점
// 8. 다음 중 어떤 타입을 선호 하시나요?
// - 넓고 럭셔리한 분위기의 공간 => 풀빌라 1점, 호캉스 1점
// - 다소 좁더라도 아늑함을 주는 공간 => 카라반 1점, 글램핑 1점
// 9. 여행 중 낯선 장소에서 당신은 어떻게 행동할까요?
// - 새로운 사람에게 말을 걸어본다 => 게스트 하우스 1점, 글램핑 1점
// - 함께 여행 중인 일행과 이야기한다 => 호캉스, 풀빌라, 카라반 1점
// 10. 여행 도중 가장 큰 목표는 무엇인가요?
// - 새로운 경험을 통한 자아 발전 => 게스트 하우스 1점
// - 스트레스를 풀 수 있는 여유로운 시간 => 호캉스, 풀빌라, 글램핑, 카라반 1점

/*  const question = [
    "1. 당신이 여행을 가는 이유는 무엇인가요?",
    if (up) {

    }
    "2. 다음 중 어떤 타입을 선호 하시나요?",
    "3. 이동이 많고 활동적인 여행을 선호 하시나요?",
    "4. 다음 중 어떤 곳을 선호 하시나요?",
    "5. 다음 중 어떤 타입을 선호 하시나요?",
    "6. 여행 중에 가장 큰 즐거움을 느끼는 상황은 무엇인가요?",
    "7. 여행에서 기대하는 가장 큰 점은 무엇인가요?",
    "8. 다음 중 어떤 타입을 선호 하시나요?",
    "9. 여행 중 낯선 장소에서 당신은 어떻게 행동할까요?",
    "10. 여행 도중 가장 큰 목표는 무엇인가요?",
  ];
 */

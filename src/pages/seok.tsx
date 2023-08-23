import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import { useState } from "react";
import MapLink from "../components/MapLink/MapLink";
import Map from "../components/Map/Map";
import DeleteModal from "../components/DeleteModal/DeleteModal";
import WithdrawalModal from "../components/WithdrawalModal/WithdrawalModal";
import MainImage from "../components/MainImage/MainImage";

interface MainImageItem {
  id: number;
  imageUrl: string;
  title: string;
  popularity: number;
  price: number; // 가격
}

const dummyMainImageList: MainImageItem[] = [
  {
    id: 1,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    title: "서울 호텔",
    price: 200000,
    popularity: 900,
  },
  {
    id: 2,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    title: "제주 호텔",
    price: 200000,
    popularity: 800,
  },
  {
    id: 3,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/10/17/15/1280/634d7563600ed4.17945107.jpg",
    title: "부산 호텔",
    price: 200000,
    popularity: 700,
  },
  {
    id: 4,
    imageUrl:
      "https://yaimg.yanolja.com/v5/2022/08/22/19/1280/6303d23b1e8ef8.15385382.png",
    title: "강원 호텔",
    price: 200000,
    popularity: 600,
  },
];

export default function Seok() {
  return (
    <>
      <WithdrawalModal>회원탈퇴를 하시겠습니까?</WithdrawalModal>
      <MapLink />
      <Map />
      {/* <DeleteModal></DeleteModal> */}
      <MainImage MainImageList={dummyMainImageList} />
    </>
  );
}

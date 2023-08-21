import Title from "../components/Title/Title";
import Button from "../components/Button/Button";
import { useState } from "react";
import MapLink from "../components/MapLink/MapLink";
import Map from "../components/Map/Map";
import DeleteModal from "../components/DeleteModal/DeleteModal";
import WithdrawalModal from "../components/WithdrawalModal/WithdrawalModal";
import MainImage from "../components/MainImage/MainImage";

export default function Seok() {
  return (
    <>
      <WithdrawalModal>회원탈퇴를 하시겠습니까?</WithdrawalModal>
      <MapLink />
      <Map />
      <DeleteModal></DeleteModal>
      <MainImage></MainImage>
    </>
  );
}

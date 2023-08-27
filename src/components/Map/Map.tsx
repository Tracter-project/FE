import styles from "./Map.module.scss";
import React, { useEffect } from "react";
import Title from "../Title/Title";
import { FaTimes } from "react-icons/fa";

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  onClose: () => void; // 부모 컴포넌트로부터 전달되는 닫기 함수
}

const Map: React.FC<MapProps> = ({ onClose }) => {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    // 카카오맵 API 스크립트를 동적으로 로드
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=f26243f4f36a4e48542648e9f0eb6638&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      // 카카오맵 API 스크립트가 로드된 후에 실행될 코드
      window.kakao.maps.load(() => {
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        // 카카오맵 객체 생성
        const map = new window.kakao.maps.Map(container, options);

        // 카카오맵을 생성하고 원하는 작업을 수행할 수 있습니다.
      });
    };

    return () => {
      // 컴포넌트가 언마운트 될 때 카카오맵 관련 리소스를 정리할 수 있는 코드를 작성할 수 있습니다.
      // 예: map.destroy();
    };
  }, []);

  return (
    <>
      <div className={styles.map}>
        <div className={styles.mapTitle}>
          <Title size="h2">지도</Title>
          <Title size="h2">
            <FaTimes className={styles.closeBtn} onClick={onClose} />
          </Title>
        </div>
        <div id="map" className={styles.kakaoMap}></div>
      </div>
    </>
  );
};

export default Map;

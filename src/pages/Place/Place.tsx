import styles from "./Place.module.scss";
import Title from "../../components/Title/Title";
import MapLink from "../../components/MapLink/MapLink";
import Button from "../../components/Button/Button";
// import MainImage from "../../components/MainImage/MainImage";
import Map from "../../components/Map/Map";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "react-modal";
import axiosRequest from "../../api";
import { useCookies } from "react-cookie";
// import { AxiosResponse } from "axios";

interface IResponse {
  data: MainImageItem;
}

interface MainImageItem {
  id: number;
  mainImage: string;
  detailImage: string;
  placeName: string;
  placeLikeCount: number;
  price: number; // 가격
  region: string;
  bookingURL: string;
  description: string;
}

export default function Place() {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const params = useParams();
  const placeId = Number(params.placeId);
  const [imageInfo, setImageInfo] = useState<MainImageItem>();
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);

  const openMapModal = () => {
    setIsMapModalOpen(true);
  };

  const closeMapModal = () => {
    setIsMapModalOpen(false);
  };

  useEffect(() => {
    const fetchPlaceInfo = async () => {
      try {
        const response = await axiosRequest.requestAxios<IResponse>(
          "get",
          `/places/${placeId}`
        );

        setImageInfo(response.data);
      } catch (error) {
        console.error("Error fetching place info:", error);
      }
    };

    fetchPlaceInfo();
  }, []);

  return (
    <>
      {imageInfo ? (
        <div>
          <div className={styles.subImage}>
            <img
              src={
                "https://cdn.pixabay.com/photo/2019/07/25/17/09/camp-4363073_1280.png"
              }
              alt="Sub Image"
            />
          </div>
          <div className={styles.subBox}>
            <div className={styles.subLeft}>
              <div className={styles.subTitle}>
                <Title size="h2">{imageInfo.placeName}</Title>
                <button onClick={openMapModal}>
                  <MapLink />
                </button>
              </div>
              <Title size="p" className={styles.subInfo}>
                {imageInfo.description}
              </Title>
              <div className={styles.subPlaces}>
                <div className={styles.region}>
                  <Title size="h5">{imageInfo.region}</Title>
                </div>
                <Title size="h5" className={styles.price}>
                  {imageInfo.price}원
                </Title>
              </div>
              <div className={styles.btnBox}>
                <Button
                  onClick={() => {
                    window.location.href = imageInfo.bookingURL;
                  }}
                >
                  예약하기
                </Button>
                {token ? (
                  <Link to={`/place/addpost/${imageInfo.id}`}>
                    <Button onClick={() => {}}>후기 / 질문남기기</Button>
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className={styles.subRight}>
              <div className={styles.subImage}>
                <img src={imageInfo.mainImage} alt="Place Image" />
              </div>
            </div>
          </div>
          <div className={styles.subImage}>
            <div className={styles.background}>
              <Title size="h2" className={styles.backgroundTitle}>
                #{imageInfo.placeName}
              </Title>
            </div>
            <img src={imageInfo.mainImage} alt="Place Image" />
          </div>
          <Modal
            isOpen={isMapModalOpen}
            onRequestClose={closeMapModal}
            contentLabel="지도 팝업"
            className={styles.mapModal}
            overlayClassName={styles.mapOverlay}
            style={{
              content: {
                width: "1400px",
                height: "600px",
                left: "50%", // Move it to the horizontal center
                top: "50%", // Move it to the horizontal center
                transform: "translate(-50%, -50%)", // Center it precisely
              },
            }}
          >
            {/* 팝업 내용 */}
            <Map onClose={closeMapModal} />
          </Modal>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

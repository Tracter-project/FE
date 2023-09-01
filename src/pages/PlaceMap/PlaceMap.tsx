import styles from "./PlaceMap.module.scss";
import Map from "../../components/Map/Map";

export default function PlaceMap() {
  const handleClose = () => {
    // 원하는 동작 수행
    console.log("지도를 닫습니다.");
  };

  return (
    <>
      <div className={styles.placeMap}>
        <Map onClose={handleClose} />
      </div>
    </>
  );
}

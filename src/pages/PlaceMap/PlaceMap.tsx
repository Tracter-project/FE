import styles from "./PlaceMap.module.scss";
import Map from "../../components/Map/Map";

export default function PlaceMap() {
  return (
    <>
      <div className={styles.placeMap}>
        <Map />
      </div>
    </>
  );
}

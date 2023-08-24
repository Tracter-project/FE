import styles from "./HotelsMap.module.scss";
import Map from "../../components/Map/Map";

export default function HotelsMap() {
  return (
    <>
      <div className={styles.hotelsMap}>
        <Map />
      </div>
    </>
  );
}

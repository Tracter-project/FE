import Title from "../Title/Title";
import styles from "./MyPagePlaces.module.scss";
import LikeButton from "../LikeButton/LikeButton";

interface MyItem {
    id: number;
    imageUrl: string;
    title: string;
}

interface MyPagePlacesProps {
    myList: MyItem[];
}

export default function MyPagePlaces(props: MyPagePlacesProps) {
    const { myList } = props;

    return (
        <>
            {myList.map((item) => (
                <div key={item.id} className={styles.myPlaces}>
                    <img src={item.imageUrl} alt={item.title} />
                    <div className={styles.titleWrap}>
                        <LikeButton onClick={() => {}}></LikeButton>
                        <div className={styles.background}>
                            <Title size="h5">{item.title}</Title>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

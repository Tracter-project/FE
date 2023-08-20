import Title from "../Title/Title";
import styles from "./MainPopularPlaces.module.scss";

interface PopularItem {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    popularity: number;
}

interface MainPopularPlacesProps {
    popularList: PopularItem[];
}

export default function MainPopularPlaces(props: MainPopularPlacesProps) {
    const { popularList } = props;

    const sortedPopularList = popularList.sort(
        (a, b) => b.popularity - a.popularity
    );
    return (
        <>
            {sortedPopularList.map((item) => (
                <div key={item.id} className={styles.popularPlaces}>
                    <img src={item.imageUrl} alt={item.title} />
                    <div className={styles.titleWrap}>
                        <Title size="h5">{item.title}</Title>
                        <Title size="p">{item.description}</Title>
                    </div>
                    {/* 좋아요 버튼 추가해야합니다 */}
                </div>
            ))}
        </>
    );
}

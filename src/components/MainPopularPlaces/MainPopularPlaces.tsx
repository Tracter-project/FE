import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';
import styles from './MainPopularPlaces.module.scss';

interface PopularItem {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    popularity: number; //인기순
}

interface MainPopularPlacesProps {
    popularList: PopularItem[];
}

export default function MainPopularPlaces(props: MainPopularPlacesProps) {
    const { popularList } = props;
    const navigate = useNavigate();

    const sortedPopularList = popularList.sort((a, b) => b.popularity - a.popularity);

    const handleClick = (id: number) => {
        navigate(`/category/${id}`);
    };
    return (
        <>
            {sortedPopularList.map((item) => (
                <div key={item.id} className={styles.popularPlaces} onClick={() => handleClick(item.id)}>
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

import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';
import styles from './MainNewPlaces.module.scss';

interface NewItem {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    date: Date; //최신 날짜 순서
}

interface MainNewPlacesProps {
    newList: NewItem[];
}

export default function MainNewPlaces(props: MainNewPlacesProps) {
    const { newList } = props;
    const navigate = useNavigate();

    const handleClick = (id: number) => {
        navigate(`/category/${id}`);
    };

    return (
        <>
            {newList.map((item) => (
                <div key={item.id} className={styles.newPlaces} onClick={() => handleClick(item.id)}>
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

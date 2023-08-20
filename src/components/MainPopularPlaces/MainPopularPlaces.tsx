import Title from "../Title/Title";
interface PopularItem {
    id: number;
    imageURl: string;
    title: string;
    desciption: string;
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
                <div key={item.id}>
                    <img src={item.imageURl} alt={item.title} />
                    <Title size="h5">{item.title}</Title>
                    <Title size="p">{item.desciption}</Title>
                </div>
            ))}
        </>
    );
}

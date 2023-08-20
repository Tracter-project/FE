import Title from "../Title/Title";
import AddButton from "../AddButton/AddButton";
import ModifyButton from "../ModifyButton/ModifyButton";
import DeleteButton from "../DeleteButton/DeleteButton";
import CheckBox from "../CheckBox/CheckBox";
import styles from "./AdminTable.module.scss";

interface AdminTableProps {
    data: {
        id: number;
        selected: boolean;
        imageUrl: string;
        area: string;
        category: string;
        name: string;
        description: string;
        price: number;
    }[];
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
    onAdd: () => void;
    setData: React.Dispatch<
        React.SetStateAction<
            {
                id: number;
                selected: boolean;
                imageUrl: string;
                area: string;
                category: string;
                name: string;
                description: string;
                price: number;
            }[]
        >
    >;
}

export default function AdminTable({
    data,
    onEdit,
    onDelete,
    onAdd,
    setData,
}: AdminTableProps) {
    const handleCheckboxChange = (id: number) => {
        const updatedData = data.map((item) =>
            item.id === id ? { ...item, selected: !item.selected } : item
        );
        setData(updatedData);
    };

    const handleDeleteSelected = () => {
        const selectedIds = data
            .filter((item) => item.selected)
            .map((item) => item.id);
        const updatedData = data.filter((item) => !item.selected);
        setData(updatedData);
        selectedIds.forEach((id) => onDelete(id));
    };

    return (
        <div className={styles.tableWrap}>
            <div className={styles.buttonIcon}>
                <AddButton onClick={onAdd}></AddButton>

                <ModifyButton onClick={() => onEdit(0)}></ModifyButton>

                <DeleteButton
                    onClick={() => handleDeleteSelected}
                ></DeleteButton>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>
                            <Title size="p">선택</Title>
                        </th>
                        <th>
                            <Title size="p">사진</Title>
                        </th>
                        <th>
                            <Title size="p">지역</Title>
                        </th>
                        <th>
                            <Title size="p">카테고리</Title>
                        </th>
                        <th>
                            <Title size="p">숙소명</Title>
                        </th>
                        <th>
                            <Title size="p">상세설명</Title>
                        </th>
                        <th>
                            <Title size="p">가격</Title>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <CheckBox
                                    checked={item.selected}
                                    onChange={() =>
                                        handleCheckboxChange(item.id)
                                    }
                                ></CheckBox>
                            </td>
                            <td>
                                <img src={item.imageUrl} alt={item.name} />
                            </td>
                            <td>{item.area}</td>
                            <td>{item.category}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

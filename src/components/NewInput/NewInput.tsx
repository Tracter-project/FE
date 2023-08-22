import styles from "./NewInput.module.scss";
interface NewInput {
    type: string;
}
export default function NewInput({ type }: NewInput) {
    return (
        <>
            <input type={type} id={styles.NewInput}></input>
        </>
    );
}

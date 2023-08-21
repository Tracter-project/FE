import styles from './NewInput.module.scss';

export default function NewInput() {
    return (
        <>
            <label htmlFor="NewInput">카테고리 추가</label>
            <br />
            <input type="text" id={styles.NewInput}></input>
            <br />
        </>
    );
}

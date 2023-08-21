import styles from './EditedInput.module.scss';

export default function EditedInput() {
  return (
    <>
      <label htmlFor="EditInput">기존 카테고리</label>
      <br />
      <input type="text" id={styles.EditInput} value="호캉스" />
    </>
  );
}

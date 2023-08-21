import React from 'react';
import styles from './TestSelectButton.module.scss';

export default function TestSelectButton() {
    return (
        <div>
            <button type="button" className={styles.selectButton}>
                <p className={styles.text}>새로운 문화와 사람들을 경험하기 위해서</p>
            </button>
        </div>
    );
}

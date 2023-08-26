import React from 'react';
import styles from './TestScore.module.scss';

interface ProgressProps {
    current: number;
    total: number;
}

const TestScore = ({ current, total }: ProgressProps) => (
    <p className={styles.text}>
        {current}/{total}
    </p>
);

export default TestScore;

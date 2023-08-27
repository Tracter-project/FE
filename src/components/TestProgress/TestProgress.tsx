import React from 'react';
// import styles from './TestProgress.module.scss';
import ProgressBar from '@ramonak/react-progress-bar';
import styles from './TestProgress.module.scss';

interface TestProgressProps {
    current: number;
    total: number;
}

export default function TestProgress({ current, total }: TestProgressProps) {
    const percentage = (current / total) * 100;
    return (
        <div className={styles.progressBox}>
            <ProgressBar completed={percentage} />
        </div>
    );
}

import React from 'react';
import styles from './TestButton.module.scss';

interface TestButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export default function TestButton({ onClick, children }: TestButtonProps) {
    return (
        <div>
            <button type="button" className={styles.selectButton} onClick={onClick}>
                <span className={styles.text}>{children}</span>
            </button>
        </div>
    );
}

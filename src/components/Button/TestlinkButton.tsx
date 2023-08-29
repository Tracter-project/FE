import React from 'react';
import styles from './Button.module.scss';
import Title from '../Title/Title';
// import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
}

export default function TestlinkButton({ onClick, children }: ButtonProps) {
    return (
        <>
            <button className={styles.testlinkButton} onClick={onClick}>
                <Title size="h5">{children}</Title>
            </button>
        </>
    );
}

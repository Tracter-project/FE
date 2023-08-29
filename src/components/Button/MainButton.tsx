import React from 'react';
import styles from './Button.module.scss';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

export default function MainButton({ onClick, children }: ButtonProps) {
    return (
        <>
            <button className={styles.mainButton} onClick={onClick}>
                <Title size="p">
                    <Link to="/">{children}</Link>
                </Title>
            </button>
        </>
    );
}

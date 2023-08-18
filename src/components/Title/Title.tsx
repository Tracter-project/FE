import React from 'react';
import './Title.module.scss';

interface TitleProps {
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p';
  children: React.ReactNode;
}

function Title ({size, children: TitleProps}) {
    const TitleTag = size;

    return <TitleTag className="title">{children}</TitleTag>
    
}


import React from 'react';
import SimpleTap, { Tab, TabProps } from './SimpleTap';
import './TapMenu.module.scss';

const tabs: TabProps[] = [
    {
        aKey: '숙소',
        title: '숙소 칸',
        children: (
            <div>
                <h3>숙소 내용에 대한 값</h3>
                <p>추가 설명 뭐시기뭐시기</p>
            </div>
        ),
    },
    {
        aKey: '카테고리',
        title: '카테고리 칸',
        children: '카테고리 내용',
    },
];

const TapMenu = (): JSX.Element | null => {
    return (
        <div>
            <SimpleTap>
                {tabs.map((item) => (
                    <Tab key={item.aKey} aKey={item.aKey} title={item.title}>
                        {item.children}
                    </Tab>
                ))}
            </SimpleTap>
        </div>
    );
};

export default TapMenu;

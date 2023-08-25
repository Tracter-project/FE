import React from 'react';
import SimpleTap, { Tab, TabProps } from './SimpleTap';
import './TapMenu.module.scss';

const tabs: TabProps[] = [
    {
        aKey: '숙소',
        title: '숙소 칸',
        //children에 내용 적기
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

const tabs2: TabProps[] = [
    {
        aKey: '예비23',
        title: '예비',
        //children에 내용 적기
        children: (
            <div>
                <h3>123123</h3>
                <p>추가 설명 뭐시기뭐시기</p>
            </div>
        ),
    },
    {
        aKey: '예비213',
        title: '예비 칸',
        children: '카테고리 내용',
    },
];

//akey: 텝메뉴 제목, children: 내용, 사용시 TapMenu.tsx에서 tab3이런식으로 복붙해서 내용 추가 후 49line을 수정.

const TapMenu = (): JSX.Element | null => {
    return (
        <div>
            <SimpleTap>
                {/* 밑에 tabs2를 원하는 변수로 변경 */}
                {tabs2.map((item) => (
                    <Tab key={item.aKey} aKey={item.aKey} title={item.title}>
                        {item.children}
                    </Tab>
                ))}
            </SimpleTap>
        </div>
    );
};

export default TapMenu;

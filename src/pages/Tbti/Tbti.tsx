import React, { useState } from 'react';
import TestScore from '../../components/TestScore/TestScore';
import styles from './Tbti.module.scss';
import Title from '../../components/Title/Title';
import TestButton from '../../components/TestButton/TestButton';
import TestProgress from '../../components/TestProgress/TestProgress';
import Score from '../../components/Score/Score';

//test que list
export default function Tbti() {
    type Answer = {
        text: string;
        scores: number[];
    };

    type Question = {
        q: string;
        a: Answer[];
    };

    // 예시에서 질문과 답변은 임의로 작성되었습니다.
    const questions: Question[] = [
        {
            q: '당신이 여행을 가는 이유는 무엇인가요?',
            a: [
                { text: '새로운 문화와 사람들을 경험하기 위해서', scores: [0, 0, 0, 1, 0] },
                { text: '온전한 휴식을 즐기기 위해서', scores: [1, 0, 0, 0, 1] },
            ],
        },
        {
            q: '질문2',
            a: [
                { text: '답변2-1', scores: [0, 1, 0, 1, 0] },
                { text: '답변2-2', scores: [1, 0, 1, 0, 1] },
            ],
        },
        // 나머지 질문들도 이와 같이 작성
    ];

    //여기부터 다시 알아보기
    const calculateResult = (selectedAnswers: Answer[]): string => {
        const resultTexts = ['호캉스', '글램핑', '카라반', '게스트하우스', '풀빌라'];

        const totalScores = [0, 0, 0, 0, 0];

        selectedAnswers.forEach((answer) => {
            answer.scores.forEach((score, idx) => {
                totalScores[idx] += score;
            }); //totalScores에 score를 하나씩 추가
        });

        const maxScoreIdx = totalScores.indexOf(Math.max(...totalScores)); //totalScores에서 가장 큰 index 찾아서 저장

        return resultTexts[maxScoreIdx];
    };

    return (
        <section>
            <div className={styles.WallPaper}>
                {/* Text */}
                <div className={styles.Text}>
                    <div className={styles.score}>
                        <Score />
                    </div>
                    <div>
                        <Title size="h2">테스트 문항</Title>
                    </div>
                    <div>
                        <Title size="h4">당신의 여행을 선택하는 주요 이유는 무엇인가요?</Title>
                    </div>
                </div>
                {/* Select Button */}
                <div className={styles.questionList}>
                    <TestButton></TestButton>
                    <TestButton></TestButton>
                    {/* hover 하면 TestSelectButton로 변하게 */}
                    <TestProgress />
                </div>
                {/* Progress */}
            </div>
        </section>
    );
}

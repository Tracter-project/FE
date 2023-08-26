import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import TestScore from '../../components/TestScore/TestScore';
import styles from './Tbti.module.scss';
import Title from '../../components/Title/Title';
import TestButton from '../../components/TestButton/TestButton';
import TestProgress from '../../components/TestProgress/TestProgress';
import Score from '../../components/Score/Score';

//질문 목록
export default function Tbti() {
    type Answer = {
        text: string;
        scores: number[];
    };

    type Question = {
        q: string;
        a: Answer[];
    };

    const questions: Question[] = [
        {
            q: '당신이 여행을 가는 이유는 무엇인가요?',
            a: [
                { text: '새로운 문화와 사람들을 경험하기 위해서', scores: [0, 0, 0, 1, 0] },
                { text: '온전한 휴식을 즐기기 위해서', scores: [1, 0, 0, 0, 1] },
            ],
        },
        {
            q: '다음 중 어떤 타입을 선호하시나요?',
            a: [
                { text: '소중한 사람들과 함께 하는 여행', scores: [0, 1, 0, 0, 1] },
                { text: '혼자 여유를 즐기며 떠나는 여행 ', scores: [1, 0, 0, 0, 0] },
            ],
        },
        {
            q: '이동이 많고 활동적인 여행을 선호 하시나요?',
            a: [
                { text: '예', scores: [0, 1, 1, 1, 0] },
                { text: '아니요 ', scores: [1, 0, 0, 0, 1] },
            ],
        },
        {
            q: '다음 중 어떤 곳을 선호 하시나요?',
            a: [
                { text: '의식주 해결이 편한 건물숲 도시', scores: [1, 0, 0, 0, 1] },
                { text: '편의 시설이 멀리 떨어져 있지만 아름다운 시골', scores: [0, 1, 1, 0, 0] },
            ],
        },
        {
            q: '다음 중 어떤 타입을 선호 하시나요?(실내/실외)',
            a: [
                { text: '야외에서 자연을 느낄 수 있는 여행', scores: [0, 1, 1, 0, 0] },
                { text: '실내에서 아늑하게 보내는 여행 ', scores: [1, 0, 0, 0, 1] },
            ],
        },
        {
            q: '여행 중에 가장 큰 즐거움을 느끼는 상황은 무엇인가요?',
            a: [
                { text: '낯선 환경이 주는 새로움', scores: [0, 1, 1, 1, 0] },
                { text: '안정감을 느낄 수 있는 편안한 환경', scores: [1, 0, 0, 0, 1] },
            ],
        },
        {
            q: '여행에서 기대하는 가장 큰 점은 무엇인가요?',
            a: [
                { text: '새로운 사람들과 인연을 맺으며 세계를 더 넓게 바라 보는 것', scores: [0, 1, 0, 1, 0] },
                { text: '일상에서 벗어난 나만의 시간', scores: [1, 0, 1, 0, 1] },
            ],
        },
        {
            q: '다음 중 어떤 타입을 선호 하시나요?',
            a: [
                { text: '넓고 럭셔리한 분위기의 공간', scores: [1, 0, 0, 0, 1] },
                { text: '다소 좁더라도 아늑함을 주는 공간 ', scores: [0, 1, 1, 0, 0] },
            ],
        },
        {
            q: '여행 중 낯선 장소에서 당신은 어떻게 행동할까요?',
            a: [
                { text: '새로운 사람에게 말을 걸어본다', scores: [0, 1, 0, 0, 1] },
                { text: '함께 여행 중인 일행과 이야기한다', scores: [1, 0, 1, 0, 1] },
            ],
        },
        {
            q: '여행 도중 가장 큰 목표는 무엇인가요?',
            a: [
                { text: '새로운 경험을 통한 자아 발전', scores: [0, 0, 0, 1, 0] },
                { text: '스트레스를 풀 수 있는 여유로운 시간', scores: [1, 1, 1, 0, 1] },
            ],
        },
    ];

    //결과 저장
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

    //score에 진행중인 질문 목록 표시
    const [current, setCurrent] = useState(0); //score
    const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);

    //결과 나오고 TestResult페이지로 넘기기
    const navigate = useNavigate();

    const handleClick = (answer: Answer) => {
        setSelectedAnswers([...selectedAnswers, answer]);

        if (current < questions.length - 1) {
            setCurrent(current + 1);
        } else {
            const result = calculateResult(selectedAnswers);
            navigate('/testresult', { state: { result } });
        }
    };

    return (
        <section>
            <div className={styles.WallPaper}>
                {/* Text */}
                <div className={styles.Text}>
                    <div className={styles.score}>
                        <Score currentQuestion={current + 1} totalQuestions={questions.length} />
                    </div>
                    <div>
                        <Title size="h2">테스트 문항</Title>
                    </div>
                    <div>
                        <Title size="h4">{questions[current].q}</Title>
                    </div>
                </div>
                {/* Select Button */}
                <div className={styles.questionList}>
                    {questions[current].a.map((answer, idx) => (
                        <TestButton key={idx} onClick={() => handleClick(answer)}>
                            {answer.text}
                        </TestButton>
                    ))}
                    <TestProgress current={current + 1} total={questions.length} />
                </div>
                {/* Progress */}
            </div>
        </section>
    );
}

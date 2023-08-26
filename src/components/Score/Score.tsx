import React from 'react';
import TestScore from '../TestScore/TestScore'; // 실제 파일 경로로 바꿔주세요.

interface ScoreProps {
    currentQuestion: number;
    totalQuestions: number;
}

const Score = ({ currentQuestion, totalQuestions }: ScoreProps) => {
  

    return (
        <div>
            <TestScore current={currentQuestion} total={totalQuestions} />
        </div>
    );
};

export default Score;

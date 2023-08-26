import React, { useState } from 'react';
import TestScore from '../TestScore/TestScore'; // 실제 파일 경로로 바꿔주세요.

const Score = () => {
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const totalQuestions = 10;

    // ...질문에 대한 처리...

    return (
        <div>
            <TestScore current={currentQuestion} total={totalQuestions} />
            {/* ...나머지 UI... */}
        </div>
    );
};

export default Score;

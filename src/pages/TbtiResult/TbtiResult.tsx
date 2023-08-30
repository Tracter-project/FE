import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import styles from './TbtiResult.module.scss';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

interface LocationState {
    result: string;
}

const getResultPath = (result: string) => {
    switch (result) {
        case '호캉스':
            return '/category/:1';
        case '글램핑':
            return '/category/:2';
        case '카라반':
            return '/category/:3';
        case '게스트하우스':
            return '/category/:4';
        case '풀빌라':
            return '/category/:5';
        default:
            throw new Error('Invalid result');
    }
};

export default function TbtiResult() {
    const location = useLocation();
    const { result } = location.state as { result: string };

    const navigate = useNavigate();

    return (
        <section>
            <div className={styles.All}>
                <div className={styles.resultBox}>
                    <div className={styles.resultBoxH2}>
                        <Title size="h2">결과내용</Title>
                    </div>
                    <div className={styles.resultBoxP}>
                        <Title size="h3">{result}</Title>
                    </div>
                    <div className={styles.resultBoxP2}>
                        <Title size="p">
                            당신은 휴식과 여유를 중요하게 생각하는 사람으로,
                            <br /> 럭셔리한 호텔에서 편안하게 휴식을 즐기는 것이 어울립니다.
                            <br /> 풍부한 시설과 서비스로 여행을 완벽하게 즐길 수 있을 것입니다.
                        </Title>
                    </div>
                    <div className={styles.resultButton}>
                        <Button onClick={() => navigate(getResultPath(result))}>결과 보기</Button>
                        {/* 결과 -> '호캉스', '글램핑', '카라반', '게스트하우스', '풀빌라'에 따라 버튼의 링크가 달라져야함 */}
                    </div>
                </div>
            </div>
        </section>
    );
}

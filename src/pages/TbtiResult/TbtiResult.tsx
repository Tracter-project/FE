import { useLocation } from 'react-router-dom';

import styles from './TbtiResult.module.scss';
import Title from '../../components/Title/Title';
import Button from '../../components/Button/Button';

interface LocationState {
    result: string;
}

export default function TbtiResult() {
    const location = useLocation();
    const { result } = location.state as { result: string };

    return (
        <section>
            <div className={styles.resultBox}>
                <div className={styles.resultBoxH2}>
                    <Title size="h2">결과내용</Title>
                </div>
                <div className={styles.resultBoxP}>
                    <Title size="p">{result}</Title>
                </div>
                <div className={styles.resultBoxP2}>
                    <Title size="p">
                        당신은 휴식과 여유를 중요하게 생각하는 사람으로,
                        <br /> 럭셔리한 호텔에서 편안하게 휴식을 즐기는 것이 어울립니다.
                        <br /> 풍부한 시설과 서비스로 여행을 완벽하게 즐길 수 있을 것입니다.
                    </Title>
                </div>
                <div className={styles.resultButton}>
                    <Button>결과 보기</Button>
                </div>
            </div>
        </section>
    );
}

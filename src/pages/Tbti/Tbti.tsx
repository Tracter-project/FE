import TestScore from '../../components/TestScore/TestScore';
import styles from './Tbti.module.scss';
import Title from '../../components/Title/Title';
import TestSelectButton from '../../components/TestSelectButton/TestSelectButton';
import TestButton from '../../components/TestButton/TestButton';
import TestProgress from '../../components/TestProgress/TestProgress';

export default function Tbti() {
    return (
        <section>
            <div className={styles.WallPaper}>
                {/* Text */}

                <div className={styles.Text}>
                    <div className={styles.score}>
                        <TestScore />
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
                    <TestProgress/>
                </div>
                {/* Progress */}
            </div>
        </section>
    );
}

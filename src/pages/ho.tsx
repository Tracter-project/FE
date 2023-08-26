import NewInput from '../components/NewInput/NewInput';
import TestButton from '../components/TestButton/TestButton';
import TestScore from '../components/TestScore/TestScore';
import TestSelectButton from '../components/TestSelectButton/TestSelectButton';
import EditedInput from '../components/EditedInput/EditedInput';
import TestProgress from '../components/TestProgress/TestProgress';
import TabMenu from '../components/TapMenu/TapMenu';
import ToggleCheckBox from '../components/ToggleCheckBox/ToggleCheckBox';
import RoundCheckbox from '../components/ToggleCheckBox/ToggleCheckBoxSetting';
import { useState } from 'react';
import SimpleTap from '../components/TapMenu/SimpleTap';
import Button from '../components/Button/Button';

export default function Ho() {
    const [checkedOption1, setCheckedOption1] = useState(false);
    const [checkedOption2, setCheckedOption2] = useState(false);
    const [checkedOption3, setCheckedOption3] = useState(false);

    const handleChange = (e) => {
        const { name, checked } = e.target;
        switch (name) {
            case 'option1':
                setCheckedOption1(checked);
                break;
            case 'option2':
                setCheckedOption2(checked);
                break;
            case 'option3':
                setCheckedOption3(checked);
                break;
            default:
        }
    };

    return (
        <>
            <TestScore />
            <TestSelectButton />
            <TestButton />
            <NewInput />
            <EditedInput />
            <TestProgress />
            <TabMenu /> {/* TabMenu.tsx 참고해주세용 */}
            <RoundCheckbox label="서울" name="option1" checked={checkedOption1} onChange={handleChange} />
            <RoundCheckbox label="강원" name="option2" checked={checkedOption2} onChange={handleChange} />
            <RoundCheckbox label="경상" name="option3" checked={checkedOption3} onChange={handleChange} />
        </>
    );
}

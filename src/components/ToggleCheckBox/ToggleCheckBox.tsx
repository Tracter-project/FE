import React, { useState } from 'react';
import ToggleCheckBoxSetting from './ToggleCheckBoxSetting';
import './ToggleCheckBox.scss';

const App = (): React.ReactElement => {
    const [checkedStates, setCheckedStates] = useState<{ [checkboxName: string]: boolean }>({
        roundCheckbox1: false,
        roundCheckbox2: false,
        roundCheckbox3: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;

        setCheckedStates((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    return (
        <div>
            <ToggleCheckBoxSetting
                label="체크박스 예시"
                name="roundCheckbox1"
                checked={checkedStates.roundCheckbox1}
                onChange={handleChange}
            />
            
        </div>
    );
};

export default App;

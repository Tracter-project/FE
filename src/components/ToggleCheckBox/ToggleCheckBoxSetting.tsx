import React from 'react';
import './ToggleCheckBox.scss'; 

type RoundCheckboxProps = {
    label: string;
    name: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RoundCheckbox = ({ label, name, checked, onChange }: RoundCheckboxProps): React.ReactElement => {
    return (
        <div className="checkbox-container">
            <div className="checkbox">
                <input type="checkbox" id={name} name={name} checked={checked} onChange={onChange} />
                <label htmlFor={name}></label>
            </div>
            <span>{label}</span>
        </div>
    );
};

export default RoundCheckbox;

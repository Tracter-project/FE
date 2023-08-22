import React, { useState } from 'react';

export type TabProps = {
    aKey: string;
    title: string;
    children: React.ReactNode;
};

type SimpleTapProps = {
    children: React.ReactElement<TabProps>[];
};

export const Tab: React.FC<TabProps> = ({ children }) => {
    return <div>{children}</div>;
};

const SimpleTap: React.FC<SimpleTapProps> = ({ children }) => {
    const [activeKey, setActiveKey] = useState(children[0].props.aKey);

    const handleTabClick = (aKey: string) => {
        setActiveKey(aKey);
    };

    return (
        <div>
            <ul>
                {children.map((child) => (
                    <li
                        key={child.props.aKey}
                        onClick={() => handleTabClick(child.props.aKey)}
                        style={{
                            cursor: 'pointer',
                            fontWeight: child.props.aKey === activeKey ? 'bold' : 'bold',
                            backgroundColor: child.props.aKey === activeKey ? '#608BD5' : '#D9D9D9',
                            color: child.props.aKey === activeKey ? 'white' : 'black',
                        }}
                    >
                        {child.props.title}
                    </li>
                ))}
            </ul>
            {children.filter((child) => child.props.aKey === activeKey)}
        </div>
    );
};

export default SimpleTap;

import React, {useState} from 'react';

import {classNames} from "shared/lib/classNames";
import cls from './SideBar.module.scss';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface ISideBarProps {
    className?: string;
}

export const SideBar: React.FC<ISideBarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    }
    return (
        <div
            className={classNames(cls.sideBar, {[cls.collapsed]: collapsed}, [className])}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                {/*<LangSwitcher />*/}
            </div>
        </div>
    );
};
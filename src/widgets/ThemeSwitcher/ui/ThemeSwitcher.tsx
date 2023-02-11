import React from 'react';

import {classNames} from "shared/lib/classNames";
import cls from './ThemeSwitcher.module.scss';
import {useTheme, Theme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface IThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({className}) => {
    const {theme, toggleTheme} = useTheme();

    const renderIcon = () => {
        if (theme === Theme.LIGHT) return <LightIcon/>;

        return <DarkIcon/>
    }

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {renderIcon()}
        </Button>
    );
};
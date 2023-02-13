import React from 'react';

import {classNames} from "shared/lib/classNames";
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ILangSwitcherProps {
    className?: string;
}

export const LangSwitcher: React.FC<ILangSwitcherProps> = ({className}) => {
    const {t: tryTranslate, i18n} = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={toggle}
                className={classNames(cls.langSwitcher, {}, [className])}
            >
                {tryTranslate(i18n.language === 'ru' ? 'Русский' : 'Английский')}
            </Button>
        </div>
    );
};
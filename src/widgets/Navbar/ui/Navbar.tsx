import React from 'react';

import {classNames} from "shared/lib/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {useTranslation} from "react-i18next";

interface INavBarProps {
    className?: string;
}

export const Navbar: React.FC<INavBarProps> = ({className}) => {
    const {t: tryTranslate} = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={RoutePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                >
                    {tryTranslate('Главная')}
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {tryTranslate('О нас')}
                </AppLink>
            </div>
        </div>
    );
};
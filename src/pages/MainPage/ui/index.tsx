import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t: tryTranslate } = useTranslation();

    return <div>{tryTranslate('Главная страница')}</div>;
};

export default MainPage;

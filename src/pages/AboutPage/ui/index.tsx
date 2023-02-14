import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t: tryTranslate } = useTranslation('about');

    return <div>{tryTranslate('О сайте')}</div>;
};

export default AboutPage;

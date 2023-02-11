import React, {Suspense} from 'react';
import {Route, Routes, Link} from 'react-router-dom';

import {MainPageLazy} from "./pages/MainPage/index.lazy";
import {AboutPageLazy} from "./pages/AboutPage/index.lazy";

import {useTheme} from "./hooks/useTheme";

import './styles/index.scss';
import {classNames} from "./helpers/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                    <Route path='' element={<MainPageLazy/>}/>
                    <Route path='/about' element={<AboutPageLazy/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

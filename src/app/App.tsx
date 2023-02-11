import React, {Suspense} from 'react';
import {Route, Routes, Link} from 'react-router-dom';

import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";

import './styles/index.scss';


export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                    <Route path='' element={<MainPage/>}/>
                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

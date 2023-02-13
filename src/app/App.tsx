import React, {Suspense} from 'react';

import {AppRouter} from "app/providers/router";
import {useTheme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";
import {classNames} from "shared/lib/classNames";
import './styles/index.scss';
import {SideBar} from "widgets/Sidebar";

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className='page-content'>

                    <SideBar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )
}

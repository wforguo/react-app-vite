import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './router/index'
import {AppState} from "./state";
import './style/app.less';

console.log('import.meta.env', import.meta.env);

ReactDOM.render(
    <React.StrictMode>
        <AppState>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AppState>
    </React.StrictMode>,
    document.getElementById('root')
)

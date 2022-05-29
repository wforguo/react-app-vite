import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import './assets/style/main.less'
import AppRouter from './router/index'
import {AppState} from "./state";

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

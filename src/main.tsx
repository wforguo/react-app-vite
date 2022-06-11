import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from '@/App'
import '@/style/app.less';
import {
    RecoilRoot,
} from 'recoil';

console.log('import.meta.env', import.meta.env);

function render () {
    ReactDOM.render(
        <RecoilRoot>
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
        </RecoilRoot>,
        document.getElementById('root')
    )
}

render();

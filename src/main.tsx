import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './assets/style/main.less'
import AppRouter from './router/index'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <AppRouter />
      </BrowserRouter>
  </React.StrictMode>
)

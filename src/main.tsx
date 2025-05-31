import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { FormProvider } from './context/FormContext'
import './index.css';
import { muiTheme } from './theme/muiTheme'
import { ThemeProvider } from '@mui/material/styles'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={muiTheme}>

        <FormProvider>       
          <App />
        </FormProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

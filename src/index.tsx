import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { myTheme } from './styled/Theme.styled'
import { GlobalStyles } from './styled/GlobalStyles'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <ThemeProvider theme={myTheme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>
)

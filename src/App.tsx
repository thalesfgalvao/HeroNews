import { GlobalStyle } from './styles/GlobalStyle'
import { Routes } from './routes/Routes'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  )
}

export default App

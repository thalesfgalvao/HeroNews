import { GlobalStyle } from './styles/GlobalStyle'
import Routes from './routes'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import { QueryClientProvider, QueryClient } from 'react-query'
import 'antd/dist/antd.css'

export const App = () => {
  const queryClient = new QueryClient()
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Routes />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}

export default App

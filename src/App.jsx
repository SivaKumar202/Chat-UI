import myTheme from './Themes/Theme'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { Button } from '@mui/material'

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline/>
    <h1>chat app</h1>
    <Button variant="contained">Text</Button>
    </ThemeProvider>
  )
}

export default App

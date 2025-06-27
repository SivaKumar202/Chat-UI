import myTheme from './Themes/Theme'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Home/Home'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

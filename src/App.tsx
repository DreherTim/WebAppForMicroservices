import { Home } from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ResponsiveAppBar } from './ResponsiveAppBar'

const theme = createTheme({
  palette: {
    primary: {
      main: '#fafafa',  // Light off-white as primary color
      contrastText: '#333',  // Darker text for contrast on primary
    },
    secondary: {
      main: '#D2B48C',  // Cream beige as secondary color
      contrastText: '#333',  // Darker text for contrast on secondary
    },
    background: {
      default: '#fafafa', // Primary color as the main background color
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This applies the background color globally */}
      <ResponsiveAppBar />
      <Home />
      </ThemeProvider>
    </>
  )
}

export default App

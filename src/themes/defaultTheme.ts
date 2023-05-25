import { createTheme } from '@mui/material/styles'

export const defaultTheme = createTheme({
  palette: {
    background: { default: '#181818', paper: '#292929' },
    primary: { 
      main: '#49533B' 
    },
    secondary: {
      main: '#FFB800'
    },
  },
  typography: {
    fontFamily: '"Montserrat","Open Sans","Tahoma","Verdana",sans-serif',
    h1: {
      fontSize: 36,
      fontWeight: 600,
    },
    h2: {
      fontSize: 25,
      fontWeight: 600,
    },
    h3: {
      fontSize: 20,
      fontWeight: 600,
    },
    h4: {
      fontSize: 20,
      fontWeight: 400,
    },
    h5: {
      fontSize: 15,
      fontWeight: 400,
    },
  },
  spacing: 4,
})

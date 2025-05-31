import { createTheme } from '@mui/material/styles'
import { colors } from './colors'

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: colors.header,
    },
    secondary: {
      main: colors.hover,
    },
    background: {
      default: colors.backgroundPrimary,
      paper: colors.white,
    },
  },
})

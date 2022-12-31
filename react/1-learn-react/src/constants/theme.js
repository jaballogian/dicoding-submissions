// MUIS
import { createTheme } from '@mui/material'
import { alpha } from '@mui/material/styles'

const white = '#FFFFFF'

let customTheme = createTheme({
  palette: {
    divider: alpha(white, 0.12),
    background: {
      default: '#282a2e', // BLACK
      paper: '#383f4d', // LIGHT BLACK
    },
    text: {
      primary: white, // WHITE
      secondary: alpha(white, 0.6), // GREY
    },
  },
  spacing: 1,
  typography: {
    fontFamily: [ 'Montserrat', 'sans-serif' ].join(','),
  },
})

customTheme = createTheme(customTheme, {
  components: {
    MuiOutlinedInput: {
      defaultProps: {
        sx: {
          '& fieldset': {
            border: `2px solid ${customTheme.palette.divider}`,
          },
        },
      },
    },
  },
})

export default customTheme
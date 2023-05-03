// MUIS
import { createTheme } from '@mui/material'

let customTheme = createTheme({
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
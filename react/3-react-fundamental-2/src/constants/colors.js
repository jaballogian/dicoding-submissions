import { grey } from '@mui/material/colors'
import { alpha } from '@mui/material/styles'

export const black = '#000000'
export const white = '#FFFFFF'

export const paletteDark = {
  divider: alpha(white, 0.12),
  background: {
    default: '#282a2e', // BLACK
    paper: '#383f4d', // LIGHT BLACK
  },
  text: {
    primary: white,
    secondary: alpha(white, 0.6),
  },
}

export const paletteLight = {
  divider: alpha(black, 0.12),
  background: {
    default: grey[200],
    paper: white,
  },
  text: {
    primary: alpha(black, 0.87),
    secondary: alpha(black, 0.6),
  },
}

export const colorsLight = {}
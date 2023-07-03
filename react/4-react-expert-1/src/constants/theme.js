/* eslint linebreak-style: ["error", "windows"] */
// MUIS
import { createTheme } from '@mui/material';

const customTheme = createTheme({
  palette: { mode: 'dark' },
  spacing: 1,
  typography: { fontFamily: ['Montserrat', 'sans-serif'].join(',') },
});

export default customTheme;

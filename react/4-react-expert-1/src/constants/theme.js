/* eslint linebreak-style: ["error", "windows"] */
// MUIS
import { createTheme } from '@mui/material';

const customTheme = createTheme({
  components: {
    MuiCardActions: {
      defaultProps: {
        sx: {
          padding: 16,
        },
      },
    },
    MuiInput: {
      defaultProps: {
        sx: {
          fontSize: 14,
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        sx: {
          fontSize: 14,
        },
      },
    },
    MuiListItemText: {
      defaultProps: {
        sx: {
          '& .MuiTypography-root': {
            fontSize: 14,
          },
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        sx: {
          fontSize: 14,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        sx: {
          fontSize: 14,
          '& .MuiInputBase-input': {
            fontSize: 14,
          },
          '& .MuiInputLabel-root': {
            fontSize: 14,
          },
        },
      },
    },
  },
  palette: { mode: 'dark' },
  spacing: 1,
  typography: { fontFamily: ['Montserrat', 'sans-serif'].join(',') },
});

export default customTheme;

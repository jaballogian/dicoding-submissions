/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

// MUIS
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// MUI ICONS
import IconExitToApp from '@mui/icons-material/ExitToApp';

// CONSTANTS
import { white } from '../constants/colors';

function Header() {
  const user = { name: 'Dummy Name' };

  const signOutUser = () => {};

  return (
    <AppBar position="static">
      <Toolbar sx={{
        margin: '0px 40px',
        alignItems: 'center',
      }}
      >
        {/* TITLE */}
        <Link
          href="/"
          color={white}
          underline="none"
          // onClick={onTitleClickHandler} // NOTE: COMMENTED TO PREVENT UNEXPEDTED LOADING
          marginRight="auto"
        >
          <Typography
            variant="h5"
            component="h1"
            fontWeight={600}
          >
            Forum App
          </Typography>
        </Link>

        {/* NAME */}
        {user?.name
        && (
        <Typography
          component="p"
          margin="0px 20px"
        >
          {user?.name}
        </Typography>
        )}

        {/* LOGOUT BUTTON */}
        {user
        && (
        <IconButton onClick={signOutUser}>
          <IconExitToApp sx={{ color: white }} />
        </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;

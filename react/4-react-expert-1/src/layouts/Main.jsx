/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';

// MUIS
import Stack from '@mui/material/Stack';

// COMPONENTS
import Header from '../components/Header';

function Main(props) {
  const { children } = props;

  return (
    <Stack
      minHeight="100vh"
      sx={(theme) => ({ backgroundColor: theme.palette.background.default })}
    >
      {/* HEADER */}
      <Header />

      {/* CHILDREN */}
      <Stack
        maxWidth="100%"
        padding={24}
      >
        {children}
      </Stack>
    </Stack>
  );
}

Main.defaultProps = {};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;

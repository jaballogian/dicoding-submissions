/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';

// MUIS
import Stack from '@mui/material/Stack';

// REDUX
import {
  useDispatch,
  useSelector,
} from 'react-redux';

// COMPONENTS
import Header from '../components/Header';

// STATES
import { asyncUnsetAuthUser } from '../states/authUser/action';

function Main(props) {
  const { children } = props;

  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  const onSignOutUser = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <Stack
      minHeight="100vh"
      sx={(theme) => ({ backgroundColor: theme.palette.background.default })}
    >
      {/* HEADER */}
      <Header
        authUser={authUser}
        onSignOutUser={onSignOutUser}
      />

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

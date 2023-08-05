/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { useNavigate } from 'react-router-dom';

// MUIS
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// REDUXS
import { useDispatch } from 'react-redux';

// COMPONENTS
import SignInInput from '../components/SignInInput';

// STATES
import { asyncSetAuthUser } from '../states/authUser/action';

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitFormHandler = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
    navigate('/');
  };

  return (
    <Stack
      flex={1}
      padding={40}
      spacing={20}
      alignItems="center"
      justifyContent="center"
    >
      {/* PAGE TITLE */}
      <Typography
        variant="h4"
        component="h2"
        color="text.primary"
        fontWeight={600}
      >
        Sign In
      </Typography>

      {/* FORM */}
      <SignInInput submitFormHandler={submitFormHandler} />

      {/* SIGN UP TEXT */}
      <Typography
        component="p"
        color="text.primary"
        textAlign="center"
      >
        Don&apos;t have an account?&nbsp;
        <Link
          href="/sign-up"
          underline="hover"
        >
          Sign up here
        </Link>
      </Typography>
    </Stack>
  );
}

export default SignIn;

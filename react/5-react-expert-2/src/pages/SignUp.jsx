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
import SignUpInput from '../components/SignUpInput';

// STATES
import { asyncRegisterUser } from '../states/users/action';

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitFormHandler = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
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
        Sign Up
      </Typography>

      {/* FORM */}
      <SignUpInput submitFormHandler={submitFormHandler} />

      {/* SIGN IN TEXT */}
      <Typography
        component="p"
        color="text.primary"
        textAlign="center"
      >
        Already have an account?&nbsp;
        <Link
          href="/sign-in"
          underline="hover"
        >
          Sign in here
        </Link>
      </Typography>
    </Stack>
  );
}

export default SignUp;

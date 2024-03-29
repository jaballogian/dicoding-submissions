/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// MUIS
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// MUI ICONS
import IconVisibility from '@mui/icons-material/Visibility';
import IconVisibilityOff from '@mui/icons-material/VisibilityOff';

// REDUXS
import { useDispatch } from 'react-redux';

// HOOKS
import useInput from '../hooks/useInput';

// STATES
import { asyncSetAuthUser } from '../states/authUser/action';

function SignIn() {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitFormHandler = (event) => {
    event.preventDefault();
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
      <Stack
        spacing={16}
        width={600}
        component="form"
        onSubmit={submitFormHandler}
      >
        {/* EMAIL INPUT */}
        <FormControl fullWidth>
          <InputLabel>
            Email Address
          </InputLabel>

          <OutlinedInput
            autoFocus
            placeholder="Enter your email address here"
            type="email"
            name="email"
            label="Email Address"
            value={email}
            onChange={onEmailChange}
          />
        </FormControl>

        {/* PASSWORD INPUT */}
        <FormControl fullWidth>
          <InputLabel>
            Password
          </InputLabel>

          <OutlinedInput
            placeholder="Enter your password here"
            type={isPasswordShown ? 'text' : 'password'}
            name="password"
            label="Password"
            value={password}
            onChange={onPasswordChange}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setIsPasswordShown((current) => !current)}
                  onMouseDown={(event) => event.preventDefault()}
                  color="primary"
                >
                  {isPasswordShown ? <IconVisibilityOff /> : <IconVisibility />}
                </IconButton>
              </InputAdornment>
            )}
          />
        </FormControl>

        {/* SIGN IN BUTTON */}
        <Button
          variant="contained"
          size="large"
          type="submit"
        >
          Sign In
        </Button>

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
    </Stack>
  );
}

export default SignIn;

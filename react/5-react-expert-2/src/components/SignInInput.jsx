/* eslint linebreak-style: ["error", "windows"] */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// MUIS
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';

// MUI ICONS
import IconVisibility from '@mui/icons-material/Visibility';
import IconVisibilityOff from '@mui/icons-material/VisibilityOff';

// HOOKS
import useInput from '../hooks/useInput';

function SignInInput(props) {
  const { submitFormHandler } = props;

  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <Stack
      spacing={16}
      width={600}
      component="form"
      onSubmit={() => submitFormHandler({ email, password })}
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
    </Stack>
  );
}

SignInInput.defaultProps = {
};

SignInInput.propTypes = {
  submitFormHandler: PropTypes.func.isRequired,
};

export default SignInInput;

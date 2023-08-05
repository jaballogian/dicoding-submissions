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

function SignUpInput(props) {
  const { submitFormHandler } = props;

  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <Stack
      spacing={16}
      width={600}
      component="form"
      onSubmit={() => submitFormHandler({ name, email, password })}
    >
      {/* NAME INPUT */}
      <FormControl fullWidth>
        <InputLabel>
          Name
        </InputLabel>

        <OutlinedInput
          autoFocus
          placeholder="Write your name here"
          type="text"
          name="name"
          label="Name"
          value={name}
          onChange={onNameChange}
        />
      </FormControl>

      {/* EMAIL INPUT */}
      <FormControl fullWidth>
        <InputLabel>
          Email Address
        </InputLabel>

        <OutlinedInput
          placeholder="Write your email address here"
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
          placeholder="Type your password here"
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

      {/* SIGN UP BUTTON */}
      <Button
        variant="contained"
        size="large"
        type="submit"
      >
        Sign Up
      </Button>
    </Stack>
  );
}

SignUpInput.defaultProps = {
};

SignUpInput.propTypes = {
  submitFormHandler: PropTypes.func.isRequired,
};

export default SignUpInput;

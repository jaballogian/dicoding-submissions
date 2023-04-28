import { useState, useContext } from 'react'

// CONTEXTS
import { AppContext } from 'contexts/AppContext'

// HOOKS
import useInput from 'hooks/useInput'

// MUIS
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import Link from '@mui/material/Link'
import OutlinedInput from '@mui/material/OutlinedInput'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// MUI ICONS
import IconVisibility from '@mui/icons-material/Visibility'
import IconVisibilityOff from '@mui/icons-material/VisibilityOff'

// SERVICES
import { login } from 'services/dicoding'

// UTILITIES
import { setAccessTokenToLocalStorage } from 'utilities/localStorage'

const SignIn = () => {
  const [ email, onEmailChange ] = useInput('')
  const [ password, onPasswordChange ] = useInput('')

  const { 
    setIsLoading,
    setSnackbar, 
  } = useContext(AppContext)

  const [ isPasswordShown, setIsPasswordShown ] = useState(false)

  const submitFormHandler = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    
    const response = await login({ email, password })
    
    let severity = 'error'
    if (response.error === false) {
      severity = 'success'
      setAccessTokenToLocalStorage(response.data.accessToken)
    }

    setSnackbar({
      open: true,
      severity,
      message: response.message,
    })

    setIsLoading(false)
  }

  return (
    <Stack 
      flex={1}
      padding={40}
      spacing={20}
      alignItems='center'
      justifyContent='center'
    >
      {/* PAGE TITLE */}
      <Typography
        variant='h4'
        component='h2' 
        color='text.primary'
        fontWeight={600}
      >
        Sign In
      </Typography>

      {/* FORM */}
      <Stack
        spacing={16}
        width={600}
        component='form'
        onSubmit={submitFormHandler}
      >
        {/* EMAIL INPUT */}
        <FormControl fullWidth>
          <InputLabel>
            Email Address
          </InputLabel>
          
          <OutlinedInput 
            autoFocus
            placeholder='Enter your email address here'
            type='email'
            name='email'
            label='Email Address'
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
            placeholder='Enter your password here'
            type={isPasswordShown ? 'text' : 'password'}
            name='password'
            label='Password'
            value={password}
            onChange={onPasswordChange}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => setIsPasswordShown(current => !current)}
                  onMouseDown={(event) => event.preventDefault()}
                  color='primary'
                >
                  {isPasswordShown ? <IconVisibilityOff/> : <IconVisibility/>}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        {/* SIGN IN BUTTON */}
        <Button
          variant='contained'
          size='large'
          type='submit'
        >
          Sign In
        </Button>

        {/* SIGN UP TEXT */}
        <Typography 
          component='p'
          color='text.primary'
          textAlign='center'
        >
          Don't have an account?&nbsp;
          <Link
            href='/sign-up'
            underline='hover'
          >
            Sign up here
          </Link>
        </Typography>
      </Stack>
    </Stack>
  )
}

export default SignIn
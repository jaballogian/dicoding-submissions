import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

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
import { register } from 'services/dicoding'

const SignUp = () => {
  const [ name, onNameChange ] = useInput('')
  const [ email, onEmailChange ] = useInput('')
  const [ password, onPasswordChange ] = useInput('')

  const { 
    setIsLoading,
    setSnackbar, 
  } = useContext(AppContext)

  const navigate = useNavigate()

  const [ isPasswordShown, setIsPasswordShown ] = useState(false)

  const submitFormHandler = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    const response = await register({ name, email, password })
    
    let severity = 'error'
    if (response.error === false) {
      severity = 'success'
      navigate('/sign-in')
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
        Sign Up
      </Typography>

      {/* FORM */}
      <Stack
        spacing={16}
        width={600}
        component='form'
        onSubmit={submitFormHandler}
      >
        {/* NAME INPUT */}
        <FormControl fullWidth>
          <InputLabel>
            Name
          </InputLabel>
          
          <OutlinedInput 
            autoFocus
            placeholder='Write your name here'
            type='text'
            name='name'
            label='Name'
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
            placeholder='Write your email address here'
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
            placeholder='Type your password here'
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

        {/* SIGN UP BUTTON */}
        <Button
          variant='contained'
          size='large'
          type='submit'
        >
          Sign Up
        </Button>

        {/* SIGN IN TEXT */}
        <Typography 
          component='p'
          color='text.primary'
          textAlign='center'
        >
          Already have an account?&nbsp;
          <Link
            href='/sign-in'
            underline='hover'
          >
            Sign in here
          </Link>
        </Typography>
      </Stack>
    </Stack>
  )
}

export default SignUp
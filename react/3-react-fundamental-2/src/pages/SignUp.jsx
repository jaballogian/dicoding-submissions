import { useState } from 'react'

// MUIS
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// MUI ICONS
import IconVisibility from '@mui/icons-material/Visibility'
import IconVisibilityOff from '@mui/icons-material/VisibilityOff'

const SignUp = () => {
  const [ isPasswordShown, setIsPasswordShown ] = useState(false)

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
        component='form'
        width={600}
      >
        {/* NAME INPUT */}
        <FormControl fullWidth>
          <InputLabel>
            Name
          </InputLabel>
          
          <OutlinedInput 
            placeholder='Write your name here'
            type='text'
            name='name'
            label='Name'
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
        >
          Sign Up
        </Button>
      </Stack>
    </Stack>
  )
}

export default SignUp
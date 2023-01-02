// MUIS
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const Error = (props) => {
  const { code, message } = props
  
  return (
    <Stack padding={40}>
      {/* TITLE */}
      <Typography
        variant='h4'
        component='h2'
        color='text.primary'
        textAlign='center'
      >
        Error {code}
      </Typography>

      {/* MESSAGE */}
      <Typography
        variant='subtitle1'
        color='text.primary'
        textAlign='center'
      >
        {message}
      </Typography>
    </Stack>
  )
}

export default Error
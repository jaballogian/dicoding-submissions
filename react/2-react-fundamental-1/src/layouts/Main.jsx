// MUIS
import Stack from '@mui/material/Stack'

const Main = (props) => {
  const { children } = props

  return (
    <Stack 
      minHeight='100vh'
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
      })}
    >
      {children}
    </Stack>
  )
}

export default Main
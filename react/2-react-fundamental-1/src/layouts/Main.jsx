import PropTypes from 'prop-types'

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

Main.defaultProps = {}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
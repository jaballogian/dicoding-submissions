import PropTypes from 'prop-types'

// COMPONENTS
import Header from 'components/Header'

// MUIS
import Stack from '@mui/material/Stack'

const Main = (props) => {
  const {
    children,
    onSearchChange,
  } = props

  return (
    <Stack 
      minHeight='100vh'
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
      })}
    >
      {/* HEADER */}
      <Header onSearchChange={onSearchChange}/>
      
      {/* CHILDREN */}
      {children}
    </Stack>
  )
}

Main.defaultProps = {}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  onSearchChange: PropTypes.func.isRequired,
}

export default Main
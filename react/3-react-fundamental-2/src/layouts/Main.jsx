import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

// COMPONENTS
import Header from 'components/Header'

// MUIS
import Stack from '@mui/material/Stack'

const Main = (props) => {
  const {
    children,
    onSearchChange,
  } = props

  const { pathname } = useLocation()

  return (
    <Stack 
      minHeight='100vh'
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,
      })}
    >
      {/* HEADER */}
      <Header 
        onSearchChange={onSearchChange}
        isWithSearch={pathname === '/'}
      />
      
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
import { useContext } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

// COMPONENTS
import Header from 'components/Header'

// CONTEXTS
import { AppContext } from 'contexts/AppContext'

// MUIS
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

const Main = (props) => {
  const {
    children,
    onSearchChange,
  } = props

  const { isLoading } = useContext(AppContext)

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

      {/* LOADING */}
      <Backdrop
        open={isLoading}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <CircularProgress 
          color='primary'
          size={60}
        />
      </Backdrop>
    </Stack>
  )
}

Main.defaultProps = {}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  onSearchChange: PropTypes.func.isRequired,
}

export default Main
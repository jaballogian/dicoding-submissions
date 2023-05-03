import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
// import { useNavigate } from 'react-router-dom'

// CONSTANTS
import { white } from 'constants/colors'

// CONTEXTS
import { AppContext } from 'contexts/AppContext'

// MUIS
import AppBar from '@mui/material/AppBar'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Link from '@mui/material/Link'
import OutlinedInput from '@mui/material/OutlinedInput'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'

// MUI ICONS
import IconDarkMode from '@mui/icons-material/DarkMode'
import IconExitToApp from '@mui/icons-material/ExitToApp'
import IconLightMode from '@mui/icons-material/LightMode'
import IconSearch from '@mui/icons-material/Search'

// UTILITIES
import {
  removeAccessTokenFromLocalStorage, 
  setThemeToLocalStorage,
} from 'utilities/localStorage'

const Header = (props) => {
  const {
    isWithSearch,
    onSearchChange,
  } = props

  const { 
    theme, setTheme,
    user, setUser, 
  } = useContext(AppContext)

  // const navigate = useNavigate()

  const [ search, setSearch ] = useState('')
  
  const onSearchChangeHandler = (event) => {
    setSearch(event.target.value)

    onSearchChange(event.target.value)
  }

  // const onTitleClickHandler = (event) => {
  //   event.preventDefault()
  //   navigate('/')
  // }

  const onSwitchThemeButtonClickHandler = () => {
    setTheme(current => {
      const newTheme = current === 'light' ? 'dark' : 'light'
      setThemeToLocalStorage(newTheme)
      return newTheme
    })
  }

  const signOutUser = () => {
    removeAccessTokenFromLocalStorage()
    setUser(null)
  }

  return (
    <AppBar position='static'>
      <Toolbar sx={{ 
        margin: '0px 40px',
        alignItems: 'center',
      }}>
        {/* TITLE */}
        <Link 
          href='/'
          color={white}
          underline='none'
          // onClick={onTitleClickHandler} // NOTE: COMMENTED TO PREVENT UNEXPEDTED LOADING
          marginRight='auto'
        >
          <Typography
            variant='h5'
            component='h1'
            fontWeight={600}
          >
            Note App
          </Typography>
        </Link>

        {/* SEARCH INPUT */}
        {isWithSearch &&
        <FormControl sx={{ marginRight: 20 }}>
          <OutlinedInput 
            placeholder='Search a title note here'
            name='search'
            startAdornment={
              <InputAdornment position='start'>
                <IconSearch sx={{ color: white }}/>
              </InputAdornment>
            }
            sx={{
              height: 44,
              '& fieldset': {
                border: 'none',
              },
              backgroundColor: alpha(white, 0.16),
            }}
            value={search}
            onChange={onSearchChangeHandler}
          />
        </FormControl>}

        {/* CHANGE THEME BUTTON */}
        <IconButton onClick={onSwitchThemeButtonClickHandler}>
          {theme === 'dark' ? (
            <IconLightMode sx={{ color: white }}/>
          ) : (
            <IconDarkMode sx={{ color: white }}/>
          )}
        </IconButton>

        {/* NAME */}
        {user?.name &&
        <Typography 
          component='p'
          margin='0px 20px'
        >
          {user?.name}
        </Typography>}

        {/* LOGOUT BUTTON */}
        {user &&
        <IconButton onClick={signOutUser}>
          <IconExitToApp sx={{ color: white }}/>
        </IconButton>}
      </Toolbar>
    </AppBar>
  )
}

Header.defaultProps = {
  isWithSearch: true,
}

Header.propTypes = {
  isWithSearch: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
}

export default Header
import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate()

  const [ search, setSearch ] = useState('')
  
  const onSearchChangeHandler = (event) => {
    setSearch(event.target.value)

    onSearchChange(event.target.value)
  }

  const onTitleClickHandler = (event) => {
    event.preventDefault()
    navigate('/')
  }

  const onSwitchThemeButtonClickHandler = () => {
    setTheme(current => {
      const newTheme = current === 'light' ? 'dark' : 'light'
      setThemeToLocalStorage(newTheme)
      return newTheme
    })
  }

  const signOutUser = () => {
    setUser(null)
    removeAccessTokenFromLocalStorage()
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
          color='text.primary'
          underline='none'
          onClick={onTitleClickHandler}
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
                <IconSearch sx={(muiTheme) => ({
                  color: muiTheme.palette.common.white,
                })}/>
              </InputAdornment>
            }
            sx={(muiTheme) => ({
              height: 44,
              '& fieldset': {
                border: 'none',
              },
              backgroundColor: alpha(muiTheme.palette.common.white, 0.16),
            })}
            value={search}
            onChange={onSearchChangeHandler}
          />
        </FormControl>}

        {/* CHANGE THEME BUTTON */}
        <IconButton onClick={onSwitchThemeButtonClickHandler}>
          {theme === 'dark' ? (
            <IconLightMode sx={(muiTheme) => ({
              color: muiTheme.palette.text.primary,
            })}/>
          ) : (
            <IconDarkMode sx={(muiTheme) => ({
              color: muiTheme.palette.text.primary,
            })}/>
          )}
        </IconButton>

        {/* NAME */}
        <Typography 
          component='p'
          margin='0px 20px'
        >
          {user?.name}
        </Typography>

        {/* LOGOUT BUTTON */}
        {user &&
        <IconButton onClick={() => signOutUser()}>
          <IconExitToApp sx={(muiTheme) => ({
            color: muiTheme.palette.text.primary,
          })}/>
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
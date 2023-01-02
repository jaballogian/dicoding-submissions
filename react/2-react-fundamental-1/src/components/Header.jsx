import { Component } from 'react'
import PropTypes from 'prop-types'

// MUIS
import AppBar from '@mui/material/AppBar'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import OutlinedInput from '@mui/material/OutlinedInput'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'

// MUI ICONS
import IconSearch from '@mui/icons-material/Search'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
    }

    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this)
  }

  onSearchChangeHandler (event) {
    this.setState(() => {
      return {
        search: event.target.value,
      }
    })

    this.props.onSearchChange(event.target.value)
  }

  render () {
    return (
      <AppBar position='static'>
        <Toolbar sx={{ 
          margin: '0px 40px',
          justifyContent: 'space-between', 
          alignItems: 'center',
        }}>
          {/* TITLE */}
          <Typography
            variant='h5'
            component='h1'
            fontWeight={600}
          >
            Note App
          </Typography>

          {/* SEARCH INPUT */}
          {this.props.isWithSearch &&
          <FormControl>
            <OutlinedInput 
              placeholder='Search a title note here'
              name='search'
              startAdornment={
                <InputAdornment position='start'>
                  <IconSearch sx={(theme) => ({
                    color: theme.palette.common.white,
                  })}/>
                </InputAdornment>
              }
              sx={(theme) => ({
                height: 44,
                '& fieldset': {
                  border: 'none',
                },
                backgroundColor: alpha(theme.palette.common.white, 0.16),
              })}
              value={this.state.search}
              onChange={this.onSearchChangeHandler}
            />
          </FormControl>}
        </Toolbar>
      </AppBar>
    )
  } 
}

Header.defaultProps = {
  isWithSearch: true,
}

Header.propTypes = {
  isWithSearch: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired,
}

export default Header
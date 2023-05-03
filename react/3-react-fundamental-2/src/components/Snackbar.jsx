import PropTypes from 'prop-types'

// MUIS
import Alert from '@mui/material/Alert'
import MuiSnackbar from '@mui/material/Snackbar'
import Slide from '@mui/material/Slide'

const SlideTransition = (props) => (
  <Slide 
    {...props} 
    direction='left' 
  />
)

const Snackbar = (props) => {
  const {
    open,
    setToast,
    severity,
    message,
  } = props

  const handleToastClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setToast(current => {
      return {
        ...current,
        open: false,
      }
    })
  }

  return (
    <MuiSnackbar 
      open={open} 
      autoHideDuration={6000} 
      onClose={handleToastClose}
      anchorOrigin={{ 
        vertical: 'top', 
        horizontal: 'right', 
      }}
      TransitionComponent={SlideTransition}
    >
      <Alert 
        elevation={6}
        variant='filled'
        onClose={handleToastClose}
        severity={severity}
      >
        {message}
      </Alert>
    </MuiSnackbar>
  )
}

Snackbar.defaultProps = {
  open: false,
  severity: 'success',
  message: '',
}

Snackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  setToast: PropTypes.func.isRequired,
  severity: PropTypes.oneOf([ 'error', 'warning', 'info', 'success' ]).isRequired,
  message: PropTypes.string.isRequired,
}

export default Snackbar
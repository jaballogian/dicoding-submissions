import { Component } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

// MUIS
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const initialState = {
  title: '',
  body: '',
  isTitleLimitReached: false,
}

class CreateNoteItem extends Component {
  constructor(props) {
    super(props)

    this.state = initialState

    this.onFormChangeHandler = this.onFormChangeHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this)
  }

  onFormChangeHandler (event) {
    if (event.target.name === 'title' && event.target.value.length > 50) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isTitleLimitReached: true,
        }
      })
    }
    else {
      this.setState((prevState) => {
        return {
          ...prevState,
          isTitleLimitReached: false,
          [event.target.name]: event.target.value,
        }
      })
    }
  }

  onSubmitEventHandler (event) {
    event.preventDefault()
    
    const { isTitleLimitReached, ...noteItemData } = this.state
    this.props.onSubmitButtonClick({ ...noteItemData })

    this.setState(initialState)

    this.props.navigate('/')
  }

  render() {
    return (
      <Stack 
        padding={40}
        spacing={24}
        alignItems='center'
        width='100%'
        maxWidth={600}
        margin='0px auto'
        component='form'
        onSubmit={this.onSubmitEventHandler}
      >
        {/* TITLE TEXT */}
        <Typography
          variant='h4'
          component='h2' 
          color='text.primary'
          fontWeight={600}
        >
          Create a New Note
        </Typography>

        {/* TITLE REMAINING CHARACTERS */}
        <Typography
          variant='subtitle1'
          color='text.secondary'
          textAlign='right'
          width='100%'
        >
          Title remaining characters: {50 - this.state.title.length}
        </Typography>

        {/* TITLE INPUT */}
        <FormControl 
          fullWidth
          error={this.state.isTitleLimitReached}
        >
          <InputLabel>
            Note title
          </InputLabel>

          <OutlinedInput 
            autoFocus
            label='Note title'
            name='title'
            value={this.state.title}
            onChange={this.onFormChangeHandler}
          />

          {this.state.isTitleLimitReached &&
          <FormHelperText error>
            The maximum characters (50) is reached
          </FormHelperText>}
        </FormControl>

        {/* BODY INPUT */}
        <FormControl  fullWidth>
          <InputLabel>
            Note body
          </InputLabel>

          <OutlinedInput 
            label='Note body'
            name='body'
            multiline
            rows={4}
            value={this.state.body}
            onChange={this.onFormChangeHandler}
          />
        </FormControl>

        {/* ADD THE NOTE BUTTON */}
        <Button
          variant='contained'
          fullWidth
          type='submit'
        >
          Add the Note
        </Button>
      </Stack>
    )
  }
}

const CreateNoteItemWrapper = (props) => {
  const { onSubmitButtonClick } = props

  const navigate = useNavigate()

  return (
    <CreateNoteItem 
      onSubmitButtonClick={onSubmitButtonClick}
      navigate={navigate}
    />
  )
}

CreateNoteItem.defaultProps = {}

CreateNoteItem.propTypes = {
  onSubmitButtonClick: PropTypes.func.isRequired,
}

CreateNoteItemWrapper.defaultProps = {}

CreateNoteItemWrapper.propTypes = {
  onSubmitButtonClick: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
}

export default CreateNoteItemWrapper
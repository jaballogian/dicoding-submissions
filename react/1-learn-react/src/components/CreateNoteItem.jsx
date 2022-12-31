import { Component } from 'react'

// MUIS
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

class CreateNoteItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
      isTitleLimitReached: false,
    }

    this.onFormChangeHandler = this.onFormChangeHandler.bind(this)
  }

  onFormChangeHandler (event) {
    if (event.target.name === 'title' && event.target.value.length > 50) {
      this.setState(() => {
        return {
          ...this.state,
          isTitleLimitReached: true,
        }
      })
    }
    else {
      this.setState(() => {
        return {
          ...this.state,
          isTitleLimitReached: false,
          [event.target.name]: event.target.value,
        }
      })
    }
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
        >
          Add the Note
        </Button>
      </Stack>
    )
  }
}

export default CreateNoteItem
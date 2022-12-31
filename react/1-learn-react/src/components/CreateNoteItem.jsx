import { Component } from 'react'

// MUIS
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

class CreateNoteItem extends Component {
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
          Title remaining characters: 0
        </Typography>

        {/* TITLE INPUT */}
        <FormControl fullWidth>
          <InputLabel>
            Note title
          </InputLabel>

          <OutlinedInput label='Note title'/>
        </FormControl>

        {/* TITLE INPUT */}
        <FormControl  fullWidth>
          <InputLabel>
            Note content
          </InputLabel>

          <OutlinedInput 
            label='Note content'
            multiline
            rows={4}
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
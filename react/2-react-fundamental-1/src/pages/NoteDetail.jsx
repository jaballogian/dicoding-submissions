import { Component } from 'react'
import { useParams } from 'react-router-dom'

// MUIS
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// UTILITIES
import { showFormattedDate } from 'utilities/data'

class NoteDetail extends Component {
  render () {
    const { note } = this.props

    return (
      <Stack padding={40}>
        {/* TITLE */}
        <Typography
          variant='h4'
          component='h2'
          fontWeight={600}
          color='text.primary'
          marginBottom={12}
        >
          {note.title}
        </Typography>

        {/* CREATED AT */}
        <Typography
          variant='body2'
          color='text.secondary'
          marginBottom={24}
        >
          {showFormattedDate(note.createdAt)}
        </Typography>

        {/* BODY */}
        <Typography
          variant='subtitle1'
          color='text.primary'
        >
          {note.body}
        </Typography>
      </Stack>
    )
  }  
}

const NoteDetailWrapper = (props) => {
  const { filteredNoteList } = props

  const { id } = useParams()

  return (
    <NoteDetail 
      id={id}
      note={filteredNoteList.find(item => item.id === id || item.id === Number(id))}
    />
  )
}

export default NoteDetailWrapper
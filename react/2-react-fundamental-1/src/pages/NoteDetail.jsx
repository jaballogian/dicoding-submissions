import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

// MUIS
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// UTILITIES
import { showFormattedDate } from 'utilities/data'

const NoteDetail = (props) => {
  const { filteredNoteList } = props

  const { id } = useParams()

  const selectedNote = filteredNoteList.find(item => item.id === id || item.id === Number(id))

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
        {selectedNote.title}
      </Typography>

      {/* CREATED AT */}
      <Typography
        variant='body2'
        color='text.secondary'
        marginBottom={24}
      >
        {showFormattedDate(selectedNote.createdAt)}
      </Typography>

      {/* BODY */}
      <Typography
        variant='subtitle1'
        color='text.primary'
        marginBottom={24}
      >
        {selectedNote.body}
      </Typography>
    </Stack>
  )
}

NoteDetail.defaultProps = {
  filteredNoteList: [],
}

NoteDetail.propTypes = {
  filteredNoteList: PropTypes.array.isRequired,
}

export default NoteDetail
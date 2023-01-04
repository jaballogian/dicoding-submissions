import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

// COMPONENTS
import NoteList from 'components/NoteList'

// MUIS
import Fab from '@mui/material/Fab'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'

// MUI ICONS
import IconAdd from '@mui/icons-material/Add'

const Main = (props) => {
  const { 
    filteredNoteList,
    onDeleteNote,
    onArchiveNote,
  } = props

  const navigate = useNavigate()

  const onFabClickHandler = (event) => {
    event.preventDefault()
    navigate('/add-new')
  }

  return (
    <>
      {/* CONTENT */}
      <Stack direction='row'>
        {/* ACTIVE NOTES */}
        <NoteList 
          noteList={filteredNoteList.filter(item => !item.archived)}
          type='active'
          onDeleteButtonClick={onDeleteNote}
          onArchiveButtonClick={onArchiveNote}
        />

        {/* ARCHIVED NOTES */}
        <NoteList 
          noteList={filteredNoteList.filter(item => item.archived)}
          type='archived'
          onDeleteButtonClick={onDeleteNote}
          onArchiveButtonClick={onArchiveNote}
        />
      </Stack>

      {/* ADD BUTTON */}
      <Tooltip
        title='Add a new note' 
        placement='top'
      >
        <Fab
          href='/add-new'
          color='primary'
          onClick={onFabClickHandler}
          sx={{
            position: 'fixed',
            bottom: 40,
            right: 40,
          }}
        >
          <IconAdd/>
        </Fab>
      </Tooltip>
    </>
  )
}

Main.defaultProps = {
  filteredNoteList: [],
}

Main.propTypes = {
  filteredNoteList: PropTypes.array.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
}

export default Main
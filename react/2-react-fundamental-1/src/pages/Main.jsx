import PropTypes from 'prop-types'

// COMPONENTS
import NoteList from 'components/NoteList'

// MUIS
import Stack from '@mui/material/Stack'

const Main = (props) => {
  const { 
    filteredNoteList,
    onDeleteNote,
    onArchiveNote,
  } = props

  return (
    <>
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
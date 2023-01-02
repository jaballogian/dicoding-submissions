import PropTypes from 'prop-types'

// COMPONENTS
import NoteItem from 'components/NoteItem'

// MUIS
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const NoteList = (props) => {
  const { 
    noteList, type, 
    onDeleteButtonClick,
    onArchiveButtonClick,
  } = props

  return (
    <Stack 
      flex={1}
      padding={40}
      spacing={40}
    >
      {/* SECTION TITLE */}
      <Typography
        variant='h4'
        component='h2'
        fontWeight={600}
        color='text.primary'
        textAlign='center'
        textTransform='capitalize'
      >
        {type} Notes
      </Typography>

      {/* NOTE LIST */}
      {noteList.length === 0 ? (
        <Typography
          variant='subtitle1'
          color='text.secondary'
          textAlign='center'
        >
          The notes are empty
        </Typography>
      ) : (
        <Stack>
          <Grid
            container
            spacing={24}
          >
            {noteList.map(item => (
              <NoteItem
                key={item.id}
                {...item}
                type={type}
                onDeleteButtonClick={onDeleteButtonClick}
                onArchiveButtonClick={onArchiveButtonClick}
              />
            ))}
          </Grid>
        </Stack>
      )}
    </Stack>
  )
}

NoteList.defaultProps = {
  noteList: [], 
  type: 'active',
}

NoteList.propTypes = {
  noteList: PropTypes.array.isRequired, 
  type: PropTypes.oneOf([ 'active', 'archived' ]).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired,
  onArchiveButtonClick: PropTypes.func.isRequired,
}

export default NoteList
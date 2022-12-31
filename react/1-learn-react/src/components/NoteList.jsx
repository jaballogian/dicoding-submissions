// COMPONENTS
import NoteItem from 'components/NoteItem'

// MUIS
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const NoteList = (props) => {
  const { 
    noteList, title, 
    onDeleteButtonClick,
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
      >
        {title}
      </Typography>

      {/* NOTE LIST */}
      <Stack>
        <Grid
          container
          spacing={24}
        >
          {noteList.map(item => (
            <NoteItem
              key={item.id}
              {...item}
              onDeleteButtonClick={onDeleteButtonClick}
            />
          ))}
        </Grid>
      </Stack>
    </Stack>
  )
}

export default NoteList
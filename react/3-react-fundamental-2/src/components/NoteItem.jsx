import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

// MUIS
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// UTILITIES
import { showFormattedDate } from 'utilities/data'

const NoteItem = (props) => {
  const { 
    id, title, createdAt, body, type,
    onDeleteButtonClick, 
    onArchiveButtonClick,
  } = props

  const navigate = useNavigate()

  const onDetailButtonClickHandler = (event, id) => {
    event.preventDefault()
    navigate(`/detail/${id}`)  
  }

  return (
    <Grid
      item
      xs={6}
    >
      <Card sx={(theme) => ({
        borderRadius: '8px',
        border: `1px solid ${theme.palette.common.white}`,
      })}>
        {/* HEADER */}
        <CardHeader
          title={title}
          subheader={showFormattedDate(createdAt)}
          titleTypographyProps={{
            noWrap: true,
          }}
          sx={{
            '& .MuiCardHeader-content': {
              flex: '1 1 auto',
              width: '100%',
            },
          }}
        />

        {/* CONTENT */}
        <CardContent>
          <Typography
            variant='subtitle1'
            textAlign='justify'
            flex={1}
            sx={{ wordWrap: 'break-word' }}
          >
            {body}
          </Typography>
        </CardContent>

        {/* ACTIONS */}
        <CardActions>
          {/* DELETE BUTTON */}
          <Button
            color='error'
            variant='contained'
            fullWidth
            onClick={() => onDeleteButtonClick(id)}
          >
            Delete
          </Button>

          {/* DETAIL BUTTON */}
          <Button
            color='info'
            variant='contained'
            fullWidth
            href={`/detail/${id}`}
            onClick={(event) => onDetailButtonClickHandler(event, id)}
            sx={{ marginLeft: 8 }}
          >
            Detail
          </Button>

          {/* ARCHIVE BUTTON */}
          <Button
            color='success'
            variant='contained'
            fullWidth
            onClick={() => onArchiveButtonClick(id, type === 'active' ? 'archive' : 'restore')}
          >
            {type === 'active' ? 'Archive' : 'Restore'}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

NoteItem.defaultProps = {
  title: '-', 
  createdAt: '', 
  body: '-', 
  type: 'active',
}

NoteItem.propTypes = {
  id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired, 
  title: PropTypes.string.isRequired, 
  createdAt: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]).isRequired, 
  body: PropTypes.string.isRequired, 
  type: PropTypes.oneOf([ 'active', 'archived' ]).isRequired,
  onDeleteButtonClick: PropTypes.func.isRequired, 
  onArchiveButtonClick: PropTypes.func.isRequired,
}

export default NoteItem
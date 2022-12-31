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
  const { title, createdAt, body } = props

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
          >
            Delete
          </Button>

          {/* ARCHIVE BUTTON */}
          <Button
            color='primary'
            variant='contained'
            fullWidth
          >
            Archive
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default NoteItem
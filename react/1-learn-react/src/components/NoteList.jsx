// MUIS
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// UTILITIES
import { showFormattedDate } from 'utilities/data'

const NoteList = (props) => {
  const { noteList, title } = props

  return (
    <Stack 
      flex='1'
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
            <Grid
              key={item.id}
              item
              xs={6}
            >
              <Card sx={(theme) => ({
                borderRadius: '8px',
                border: `1px solid ${theme.palette.common.white}`,
              })}>
                {/* HEADER */}
                <CardHeader
                  title={item.title}
                  subheader={showFormattedDate(item.createdAt)}
                />

                {/* CONTENT */}
                <CardContent>
                  <Typography
                    variant='subtitle1'
                    textAlign='justify'
                    flex='1'
                  >
                    {item.body}
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
          ))}
        </Grid>
      </Stack>
    </Stack>
  )
}

export default NoteList
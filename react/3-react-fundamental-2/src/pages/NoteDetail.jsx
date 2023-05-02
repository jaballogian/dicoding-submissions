import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

// CONTEXTS
import { AppContext } from 'contexts/AppContext'

// MUIS
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

// PAGES
import Error from 'pages/Error'

// SERVICES
import { getNote } from 'services/dicoding'

// UTILITIES
import { showFormattedDate } from 'utilities/data'

const NoteDetail = () => {
  const { setIsLoading } = useContext(AppContext)

  const { id } = useParams()

  const [ noteDetail, setNoteDetail ] = useState(null)

  const getNoteDetail = async () => {
    setIsLoading(true)

    const response = await getNote(id)
    
    if (response.error === false) setNoteDetail(response.data)

    setIsLoading(false)
  }

  useEffect(() => {
    getNoteDetail()
  }, [id])
  
  if (noteDetail) return (
    <Stack padding={40}>
      {/* TITLE */}
      <Typography
        variant='h4'
        component='h2'
        fontWeight={600}
        color='text.primary'
        marginBottom={12}
      >
        {noteDetail.title}
      </Typography>

      {/* CREATED AT */}
      <Typography
        variant='body2'
        color='text.secondary'
        marginBottom={24}
      >
        {showFormattedDate(noteDetail.createdAt)}
      </Typography>

      {/* BODY */}
      <Typography
        variant='subtitle1'
        color='text.primary'
        marginBottom={24}
      >
        {noteDetail.body}
      </Typography>
    </Stack>
  )
  else return (
    <Error
      code={404}
      message='Sorry, we could not find the note'
    />
  )
}

export default NoteDetail
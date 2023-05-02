import { Suspense, lazy, useState, useEffect, useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// COMPONENTS
import Snackbar from 'components/Snackbar'

// CONTEXTS
import { AppContext } from 'contexts/AppContext'

// LAYOUTS
import LayoutMain from 'layouts/Main'

// MUIS
import Stack from '@mui/material/Stack'

// SERVICES
import { 
  addNote,
  archiveNote,
  deleteNote,
  getActiveNotes, 
  getArchivedNotes,
  getUserLogged, 
  unarchiveNote,
} from 'services/dicoding'

// UTILITIES
import { readAccessTokenFromLocalStorage } from 'utilities/localStorage'

// PAGES
const CreateNoteItem = lazy(() => import('pages/CreateNoteItem'))
const Error = lazy(() => import('pages/Error'))
const Main = lazy(() => import('pages/Main'))
const NoteDetail = lazy(() => import('pages/NoteDetail'))
const SignIn = lazy(() => import('pages/SignIn'))
const SignUp = lazy(() => import('pages/SignUp'))

const App = () => {
  const { 
    setIsLoading,
    snackbar, setSnackbar, 
    setUser,
  } = useContext(AppContext)

  const [ search, setSearch ] = useState('')
  const [ noteList, setNoteList ] = useState([])
  const [ filteredNoteList, setFilteredNoteList ] = useState([])

  const accessToken = readAccessTokenFromLocalStorage()

  const getAllNotesData = async () => {
    setIsLoading(true)

    const responseActiveNotes = await getActiveNotes()
    const responseArchivedNotes = await getArchivedNotes()
    
    if (responseActiveNotes.error === false && responseArchivedNotes.error === false) {
      setNoteList([ 
        ...responseActiveNotes.data, 
        ...responseArchivedNotes.data, 
      ])
    }

    setIsLoading(false)
  }

  const onAddNewNoteHandler = async ({ title, body }) => {
    setIsLoading(true)

    const response = await addNote({ title, body })
    
    let severity = 'error'
    if (response.error === false) {
      severity = 'success'
      getAllNotesData()
    }
    
    setIsLoading(false)
    setSnackbar({
      open: true,
      severity,
      message: response.message,
    })
  }

  const onDeleteNoteHandler = async (id) => {
    setIsLoading(true)

    const response = await deleteNote(id)

    let severity = 'error'
    if (response.error === false) {
      severity = 'success'
      getAllNotesData()
    }

    setIsLoading(false)
    setSnackbar({
      open: true,
      severity,
      message: response.message,
    })
  }

  const onArchiveNoteHandler = async (id, command) => {
    setIsLoading(true)

    let response = {}
    if (command === 'archive') {
      response = await archiveNote(id)
    }
    else if (command === 'restore') {
      response = await unarchiveNote(id)
    }

    let severity = 'error'
    if (response.error === false) {
      severity = 'success'
      getAllNotesData()
    }

    setIsLoading(false)
    setSnackbar({
      open: true,
      severity,
      message: response.message,
    })
  }

  const pageList = [
    // AUTHENTICATION PAGES
    {
      path: '/sign-up',
      type: 'authentication',
      element: <SignUp/>,
    },
    {
      path: '/sign-in',
      type: 'authentication',
      element: <SignIn/>,
    },
    // PRIVATE PAGES
    {
      path: '/',
      type: 'private',
      element: (
        <Main
          filteredNoteList={filteredNoteList}
          onDeleteNote={onDeleteNoteHandler}
          onArchiveNote={onArchiveNoteHandler}
        />
      ),
    },
    {
      path: '/detail/:id',
      type: 'private',
      element: <NoteDetail/>,
    },
    {
      path: '/add-new',
      type: 'private',
      element: <CreateNoteItem onSubmitButtonClick={onAddNewNoteHandler}/>,
    },
    // FREE ACCESS PAGES
    {
      path: '*',
      type: 'free',
      element: (
        <Error 
          code={404}
          message='Sorry, we could not find the page'
        />
      ),
    }
  ]

  const getRouteComponent = (route) => {
    if (route.type === 'authentication') {
      return (
        accessToken ? (
          <Navigate 
            replace 
            to='/'
          />
        ) : route.element
      )
    }
    else if (route.type === 'private') {
      return (
        accessToken ? route.element : (
          <Navigate 
            replace 
            to='/sign-in'
          />
        )
      )
    }
    else if (route.type === 'free') return route.element
  }

  const updateUserInformation = async () => {
    setIsLoading(true)

    const response = await getUserLogged()
    
    if (response.error === false) setUser(response.data)

    setIsLoading(false)
  }

  useEffect(() => {
    getAllNotesData()
  }, [])

  useEffect(() => {
    setFilteredNoteList(noteList.filter(item => item.title.toLowerCase().includes(search.toLowerCase())))
  }, [noteList, search])

  useEffect(() => {
    if (accessToken) updateUserInformation()
  }, [accessToken])

  return (
    <Suspense fallback={
      <Stack>
        Loading
      </Stack>
    }>
      {/* PAGES */}
      <Routes>
        {pageList.map((item, index) => (
          <Route 
            key={index}
            path={item.path} 
            element={
              <LayoutMain onSearchChange={(search) => setSearch(search)}>
                {getRouteComponent(item)}
              </LayoutMain>
            }
          />
        ))}
      </Routes>

      {/* SNACKBAR */}
      <Snackbar
        open={snackbar.open}
        setToast={setSnackbar}
        severity={snackbar.severity}
        message={snackbar.message}
      />
    </Suspense>
  )
}

export default App
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
  getActiveNotes, 
  getUserLogged, 
} from 'services/dicoding'

// UTILITIES
import { getInitialData } from 'utilities/data'
import { readAccessTokenFromLocalStorage } from 'utilities/localStorage'

// PAGES
const CreateNoteItem = lazy(() => import('pages/CreateNoteItem'))
const Error = lazy(() => import('pages/Error'))
const Main = lazy(() => import('pages/Main'))
const NoteDetail = lazy(() => import('pages/NoteDetail'))
const SignIn = lazy(() => import('pages/SignIn'))
const SignUp = lazy(() => import('pages/SignUp'))

const App = () => {
  const { snackbar, setSnackbar } = useContext(AppContext)

  const [ search, setSearch ] = useState('')
  const [ noteList, setNoteList ] = useState(getInitialData())
  const [ filteredNoteList, setFilteredNoteList ] = useState(getInitialData())
  const [ user, setUser ] = useState(null)

  const accessToken = readAccessTokenFromLocalStorage()

  const getActiveNotesData = async () => {
    const response = await getActiveNotes()
    
    if (response.error === false) setNoteList(response.data)
  }

  const onAddNewNoteHandler = async ({ title, body }) => {
    const response = await addNote({ title, body })
    
    if (response.error === false) getActiveNotesData()
  }

  const onDeleteNoteHandler = (id) => {   
    setNoteList(current => {
      return current.filter(item => item.id !== id)
    })
  }

  const onArchiveNoteHandler = (id) => {
    setNoteList(current => {
      return current.map(item => {
        return {
          ...item,
          archived: item.id === id ? !item.archived : item.archived,
        }
      })
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
      element: <NoteDetail filteredNoteList={filteredNoteList}/>,
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
    const response = await getUserLogged()
    
    if (response.error === false) {
      setUser(response.data)
    }
  }

  useEffect(() => {
    getActiveNotesData()
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
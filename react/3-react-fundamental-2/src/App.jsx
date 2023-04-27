import { Suspense, lazy, useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// LAYOUTS
import LayoutMain from 'layouts/Main'

// MUIS
import Stack from '@mui/material/Stack'

// UTILITIES
import { getInitialData } from 'utilities/data'

// PAGES
const CreateNoteItem = lazy(() => import('pages/CreateNoteItem'))
const Error = lazy(() => import('pages/Error'))
const Main = lazy(() => import('pages/Main'))
const NoteDetail = lazy(() => import('pages/NoteDetail'))
const SignIn = lazy(() => import('pages/SignIn'))
const SignUp = lazy(() => import('pages/SignUp'))

const App = () => {
  const [ search, setSearch ] = useState('')
  const [ noteList, setNoteList ] = useState(getInitialData())
  const [ filteredNoteList, setFilteredNoteList ] = useState(getInitialData())
  const [ user, setUser ] = useState(null)

  const onAddNewNoteHandler = ({ title, body }) => {   
    setNoteList(current => {
      return [ 
        ...current, 
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date(),
        },
      ]
    })
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
        user ? (
          <Navigate 
            replace 
            to='/'
          />
        ) : route.element
      )
    }
    else if (route.type === 'private') {
      return (
        user ? route.element : (
          <Navigate 
            replace 
            to='/sign-in'
          />
        )
      )
    }
    else if (route.type === 'free') return route.element
  }

  useEffect(() => {
    setFilteredNoteList(noteList.filter(item => item.title.toLowerCase().includes(search.toLowerCase())))
  }, [noteList, search])

  return (
    <Suspense fallback={
      <Stack>
        Loading
      </Stack>
    }>
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
    </Suspense>
  )
}

export default App
import { Suspense, lazy, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

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

  const onAddNewNoteHandler = ({ title, body }) => {    
    const newNoteList = [
      ...noteList,
      {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date(),
      },
    ]

    setNoteList(newNoteList)
    setFilteredNoteList(newNoteList.filter(item => item.title.toLowerCase().includes(search.toLowerCase())))
  }

  const onDeleteNoteHandler = (id) => {
    const newNoteList = [...noteList].filter(item => item.id !== id)
    
    setNoteList(newNoteList)
    setFilteredNoteList(newNoteList.filter(item => item.title.toLowerCase().includes(search.toLowerCase())))
  }

  const onArchiveNoteHandler = (id) => {
    const newNoteList = [...noteList].map(item => {
      return {
        ...item,
        archived: item.id === id ? !item.archived : item.archived,
      }
    })

    setNoteList(newNoteList)
    setFilteredNoteList(newNoteList.filter(item => item.title.toLowerCase().includes(search.toLowerCase())))
  }

  const onSearchChangeHandler = (search) => {
    setSearch(search)
    setFilteredNoteList(noteList.filter(item => item.title.toLowerCase().includes(search.toLowerCase())))
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
      element: (
        <Error 
          code={404}
          message='Sorry, we could not find the page'
        />
      ),
    }
  ]

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
              <LayoutMain onSearchChange={onSearchChangeHandler}>
                {item.element}
              </LayoutMain>
            }
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
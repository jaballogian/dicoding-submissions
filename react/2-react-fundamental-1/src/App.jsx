import { Component, Suspense, lazy } from 'react'
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

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      search: '',
      noteList: getInitialData(),
      filteredNoteList: getInitialData(),
    }

    this.onAddNewNoteHandler = this.onAddNewNoteHandler.bind(this)
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this)
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this)
  }

  onAddNewNoteHandler ({ title, body }) {
    this.setState((prevState) => {
      const newNoteList = [
        ...prevState.noteList,
        {
          id: +new Date(),
          title,
          body,
          archived: false,
          createdAt: new Date(),
        },
      ]

      return {
        ...prevState,
        noteList: newNoteList,
        filteredNoteList: newNoteList.filter(item => item.title.toLowerCase().includes(this.state.search.toLowerCase())),
      }
    })
  }

  onDeleteNoteHandler (id) {
    this.setState((prevState) => {
      const newNoteList = prevState.noteList.filter(item => item.id !== id)

      return {
        ...prevState,
        noteList: newNoteList,
        filteredNoteList: newNoteList.filter(item => item.title.toLowerCase().includes(this.state.search.toLowerCase())),
      }
    })
  }

  onArchiveNoteHandler (id) {
    this.setState((prevState) => {
      const newNoteList = prevState.noteList.map(item => {
        return {
          ...item,
          archived: item.id === id ? !item.archived : item.archived,
        }
      })

      return {
        ...prevState,
        noteList: newNoteList,
        filteredNoteList: newNoteList.filter(item => item.title.toLowerCase().includes(this.state.search.toLowerCase())),
      }
    })
  }

  onSearchChangeHandler (search) {
    this.setState((prevState) => {
      return {
        ...prevState,
        search,
        filteredNoteList: prevState.noteList.filter(item => item.title.toLowerCase().includes(search.toLowerCase())),
      }
    })
  }

  render () {
    const pageList = [
      {
        path: '/',
        element: (
          <Main
            filteredNoteList={this.state.filteredNoteList}
            onDeleteNote={this.onDeleteNoteHandler}
            onArchiveNote={this.onArchiveNoteHandler}
          />
        ),
      },
      {
        path: '/detail/:id',
        element: <NoteDetail filteredNoteList={this.state.filteredNoteList}/>,
      },
      {
        path: '/add-new',
        element: <CreateNoteItem onSubmitButtonClick={this.onAddNewNoteHandler}/>,
      },
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
                <LayoutMain onSearchChange={this.onSearchChangeHandler}>
                  {item.element}
                </LayoutMain>
              }
            />
          ))}
        </Routes>
      </Suspense>
    )
  }
}

export default App
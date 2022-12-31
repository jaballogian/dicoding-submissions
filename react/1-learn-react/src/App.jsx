import { Component } from 'react'

// COMPONENTS
import CreateNoteItem from 'components/CreateNoteItem'
import Header from 'components/Header'
import NoteList from 'components/NoteList'

// MUIS
import Stack from '@mui/material/Stack'

// UTILITIES
import { getInitialData } from 'utilities/data'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      noteList: getInitialData(),
      filteredNoteList: getInitialData(),
    }

    this.onAddNewNoteHandler = this.onAddNewNoteHandler.bind(this)
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
    this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this)
  }

  onAddNewNoteHandler ({ title, body }) {
    this.setState((prevState) => {
      const newNoteItem = {
        id: +new Date(),
        title,
        body,
        archived: false,
        createdAt: new Date(),
      }

      return {
        noteList: [
          ...prevState.noteList,
          newNoteItem,
        ],
        filteredNoteList: [
          ...prevState.filteredNoteList,
          newNoteItem,
        ],
      }
    })
  }

  onDeleteNoteHandler (id) {
    this.setState((prevState) => {
      const newNoteList = prevState.noteList.filter(item => item.id !== id)

      return {
        ...prevState,
        noteList: newNoteList,
        filteredNoteList: newNoteList,
      }
    })
  }

  onSearchChangeHandler (search) {
    this.setState((prevState) => {
      return {
        ...prevState,
        filteredNoteList: prevState.noteList.filter(item => item.title.toLowerCase().includes(search.toLowerCase())),
      }
    })
  }

  render() {
    return (
      <Stack 
        minHeight='100vh'
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
        })}
      >
        {/* HEADER */}
        <Header onSearchChange={this.onSearchChangeHandler}/>
        
        {/* CREATE A NOTE ITEM */}
        <CreateNoteItem onSubmitButtonClick={this.onAddNewNoteHandler}/>

        <Stack direction='row'>
          {/* ACTIVE NOTES */}
          <NoteList 
            noteList={this.state.filteredNoteList.filter(item => !item.archived)}
            title='Active Notes'
            onDeleteButtonClick={this.onDeleteNoteHandler}
          />

          {/* ARCHIVED NOTES */}
          <NoteList 
            noteList={this.state.filteredNoteList.filter(item => item.archived)}
            title='Archived Notes'
          />
        </Stack>
      </Stack>
    )
  }
}

export default App
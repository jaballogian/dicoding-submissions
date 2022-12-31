import { Component } from 'react'

// COMPONENTS
import CreateNoteItem from 'components/CreateNoteItem'
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
    }

    this.onAddNewNoteHandler = this.onAddNewNoteHandler.bind(this)
  }

  onAddNewNoteHandler ({ title, body }) {
    this.setState((prevState) => {
      return {
        noteList: [
          ...prevState.noteList,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
        ],
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
        {/* CREATE A NOTE ITEM */}
        <CreateNoteItem onSubmitButtonClick={this.onAddNewNoteHandler}/>

        <Stack direction='row'>
          {/* ACTIVE NOTES */}
          <NoteList 
            noteList={this.state.noteList.filter(item => !item.archived)}
            title='Active Notes'
          />

          {/* ARCHIVED NOTES */}
          <NoteList 
            noteList={this.state.noteList.filter(item => item.archived)}
            title='Archived Notes'
          />
        </Stack>
      </Stack>
    )
  }
}

export default App
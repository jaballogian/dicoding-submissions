import { Component } from 'react'

// COMPONENTS
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
  }

  render() {
    return (
      <Stack 
        direction='row'
        minHeight='100vh'
        sx={(theme) => ({
          backgroundColor: theme.palette.background.default,
        })}
      >
        {/* ACTIVE NOTES */}
        <NoteList 
          noteList={this.state.noteList.filter(item => !item.archived)}
          title='Active Notes'
        />
      </Stack>
    )
  }
}

export default App
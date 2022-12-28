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
      <Stack direction='row'>
        {/* ACTIVE NOTES */}
        <NoteList/>
      </Stack>
    )
  }
}

export default App
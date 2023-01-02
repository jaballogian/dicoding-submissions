import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

// MUIS
import Stack from '@mui/material/Stack'

// PAGES
const Main = lazy(() => import('pages/Main'))
const NoteDetail = lazy(() => import('pages/NoteDetail'))

const App = () => {
  const pageList = [
    {
      path: '/',
      element: <Main/>,
    },
    {
      path: '/detail/:id',
      element: <NoteDetail/>,
    },
  ]

  return (
    <Suspense fallback={(
      <Stack>
        Loading
      </Stack>
    )}>
      <Routes>
        {pageList.map((item, index) => (
          <Route 
            key={index}
            path={item.path} 
            element={item.element}
          />
        ))}
      </Routes>
    </Suspense>
  )
}

export default App
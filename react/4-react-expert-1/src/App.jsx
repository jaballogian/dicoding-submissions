import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// MUIS
import Stack from '@mui/material/Stack';

// LAYOUTS
import LayoutMain from './layouts/Main';

// PAGES
const CreateNewThread = lazy(() => import('./pages/CreateNewThread'));
const Error = lazy(() => import('./pages/Error'));
const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const ThreadDetail = lazy(() => import('./pages/ThreadDetail'));

const pageList = [
  // AUTHENTICATION PAGES
  {
    path: '/sign-in',
    type: 'authentication',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    type: 'authentication',
    element: <SignUp />,
  },
  // PRIVATE PAGES
  {
    path: '/',
    type: 'private',
    element: <Home />,
  },
  {
    path: '/thread/:threadId',
    type: 'private',
    element: <ThreadDetail />,
  },
  {
    path: '/create-new-thread',
    type: 'private',
    element: <CreateNewThread />,
  },
  // FREE PAGES
  {
    path: '*',
    type: 'free',
    element: <Error />,
  },
];

function App() {
  // const accessToken = { name: 'dummy name' };
  const accessToken = null;

  const getRouteComponent = (route) => {
    if (route.type === 'authentication') {
      return (
        accessToken ? (
          <Navigate
            replace
            to="/"
          />
        ) : route.element
      );
    }
    if (route.type === 'private') {
      return (
        accessToken ? route.element : (
          <Navigate
            replace
            to="/sign-in"
          />
        )
      );
    }
    if (route.type === 'free') return route.element;

    return null;
  };

  return (
    <Suspense fallback={(
      <Stack>
        Loading
      </Stack>
    )}
    >
      {/* PAGES */}
      <Routes>
        {pageList.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={(
              <LayoutMain>
                {getRouteComponent(item)}
              </LayoutMain>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;

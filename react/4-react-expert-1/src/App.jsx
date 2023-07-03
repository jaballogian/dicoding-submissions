import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// MUIS
import Stack from '@mui/material/Stack';

// PAGES
const Error = lazy(() => import('./pages/Error'));
const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn'));

const pageList = [
  // AUTHENTICATION PAGES
  {
    path: '/sign-in',
    type: 'authentication',
    element: <SignIn />,
  },
  // PRIVATE PAGES
  {
    path: '/',
    type: 'private',
    element: <Home />,
  },
  // FREE PAGES
  {
    path: '*',
    type: 'free',
    element: <Error />,
  },
];

function App() {
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
            element={getRouteComponent(item)}
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;

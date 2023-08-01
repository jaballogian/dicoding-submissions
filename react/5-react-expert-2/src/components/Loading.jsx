/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

// MUIS
import Stack from '@mui/material/Stack';

// REDUX
import LoadingBar from 'react-redux-loading-bar';

function Loading() {
  return (
    <Stack
      position="sticky"
      top={0}
    >
      <LoadingBar />
    </Stack>
  );
}

export default Loading;

/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

// MUIS
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// COMPONENTS
import ThreadItem from '../components/ThreadItem';

// CONSTANTS
import {
  dummyThreadList,
  dummyUserList,
} from '../constants/mockAPI';

function Home() {
  const combinedThreadAndUserLists = dummyThreadList.map((thread) => ({
    ...thread,
    user: dummyUserList.find((user) => thread.ownerId === user.id),
  }));

  return (
    <Stack
      width="100%"
      maxWidth={1200}
      alignSelf="center"
    >
      {/* TITLE */}
      <Typography
        variant="h6"
        fontWeight={600}
        color="text.primary"
        marginBottom={24}
      >
        Threads
      </Typography>

      {combinedThreadAndUserLists.length === 0 ? (
        // EMPTY LIST TEXT
        <Typography color="text.primary">
          No threads available
        </Typography>
      ) : (
        // THREAD LIST
        <Stack spacing={24}>
          {combinedThreadAndUserLists.map((thread) => (
            <ThreadItem
              key={thread.id}
              id={thread.id}
              body={thread.body}
              createdTime={thread.createdAt}
              title={thread.title}
              totalComments={thread.totalComments}
              name={thread.user.name}
              avatar={thread.user.avatar}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}

export default Home;

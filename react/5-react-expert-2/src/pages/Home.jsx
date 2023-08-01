/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect } from 'react';

// MUIS
import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// MUI ICONS
import IconAdd from '@mui/icons-material/Add';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS
import ThreadItem from '../components/ThreadItem';

// STATES
import asyncPopulateUsersAndThreads from '../states/shared/action';

function Home() {
  const {
    threads = [],
    users = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  const combinedThreadAndUserLists = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => thread.ownerId === user.id),
  }));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  return (
    <Stack
      width="100%"
      maxWidth={1200}
      alignSelf="center"
      position="relative"
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
              key={thread?.id}
              id={thread?.id}
              body={thread?.body}
              createdTime={thread?.createdAt}
              title={thread?.title}
              totalComments={thread?.totalComments}
              name={thread?.user?.name}
              avatar={thread?.user?.avatar}
            />
          ))}
        </Stack>
      )}

      {/* CREATE A NEW THREAD FAB */}
      <Fab
        color="primary"
        href="/create-new-thread"
        sx={{
          position: 'fixed',
          bottom: 40,
          right: 40,
        }}
      >
        <IconAdd />
      </Fab>
    </Stack>
  );
}

export default Home;

/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

// DATE AND TIME
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';

// MUIS
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

// CONSTANTS
import {
  dummyThreadList,
  dummyUserList,
} from '../constants/mockAPI';

function ThreadDetail() {
  const combinedThreadAndUserLists = dummyThreadList.map((thread) => ({
    ...thread,
    user: dummyUserList.find((user) => thread.ownerId === user.id),
  }));
  const threadDetail = combinedThreadAndUserLists[2];

  return (
    <Card>
      {/* HEADER */}
      <CardHeader
        avatar={(<Avatar src={threadDetail.user.avatar} />)}
        title={threadDetail.user.name}
        subheader={moment(threadDetail.createdAt).fromNow()}
      />

      {/* CONTENT */}
      <CardContent>
        {/* TITLE */}
        <Typography
          fontWeight={600}
          marginBottom={8}
        >
          {threadDetail.title}
        </Typography>

        {/* BODY */}
        <Box dangerouslySetInnerHTML={{ __html: threadDetail.body }} />
      </CardContent>
    </Card>
  );
}

export default ThreadDetail;

/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

// DATE AND TIME
// eslint-disable-next-line import/no-extraneous-dependencies
// import moment from 'moment';

// MUIS
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// COMPONENTS
import CommentItem from '../components/CommentItem';

// CONSTANTS
import {
  dummyCommentList,
  dummyThreadList,
  dummyUserList,
} from '../constants/mockAPI';

// HOOKS
import useInput from '../hooks/useInput';

// UTILITIES
import convertDate from '../utilities/date';

function ThreadDetail() {
  const combinedThreadAndUserLists = dummyThreadList.map((thread) => ({
    ...thread,
    user: dummyUserList.find((user) => thread.ownerId === user.id),
  }));
  const threadDetail = combinedThreadAndUserLists[2];

  const [inputComment, setInputComment] = useInput('');

  return (
    <Card sx={{
      maxWidth: 1200,
      alignSelf: 'center',
      width: '100%',
    }}
    >
      {/* HEADER */}
      <CardHeader
        avatar={(<Avatar src={threadDetail.user.avatar} />)}
        title={threadDetail.user.name}
        subheader={convertDate(threadDetail.createdAt)}
      />

      {/* CONTENT */}
      <CardContent>
        {/* TITLE */}
        <Typography
          variant="h6"
          fontWeight={600}
          marginBottom={20}
        >
          {threadDetail.title}
        </Typography>

        {/* BODY */}
        <Box dangerouslySetInnerHTML={{ __html: threadDetail.body }} />

        {/* COMMENT FORM */}
        <Stack
          margin="40px 0px"
          spacing={16}
          width="100%"
          component="form"
          // onSubmit={submitFormHandler}
        >
          {/* COMMENT INPUT */}
          <FormControl fullWidth>
            <InputLabel>
              Comment
            </InputLabel>

            <OutlinedInput
              autoFocus
              placeholder="Write your comment here"
              type="text"
              name="comment"
              label="Comment"
              multiline
              rows={4}
              value={inputComment}
              onChange={setInputComment}
            />
          </FormControl>

          {/* COMMENT BUTTON */}
          <Button
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </Stack>

        {/* COMMENTS TEXT */}
        <Typography
          fontWeight={600}
          color="text.primary"
        >
          Comments (
          {dummyCommentList.length}
          )
        </Typography>

        {/* COMMENTS */}
        <Stack
          marginTop={24}
          divider={(
            <Divider
              orientation="horizontal"
              flexItem
            />
          )}
        >
          {dummyCommentList.map((item) => (
            <CommentItem
              key={item.id}
              avatar={item.owner.avatar}
              name={item.owner.name}
              createdTime={item.createdAt}
              content={item.content}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ThreadDetail;

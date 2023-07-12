/* eslint linebreak-style: ["error", "windows"] */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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

// REDUX
import {
  useDispatch,
  useSelector,
} from 'react-redux';

// COMPONENTS
import CommentItem from '../components/CommentItem';

// HOOKS
import useInput from '../hooks/useInput';

// UTILITIES
import convertDate from '../utilities/date';

// STATES
import { asyncAddComment } from '../states/comments/action';
import { asyncReceiveThreadDetail } from '../states/threadDetail/action';

function ThreadDetail() {
  const { threadId } = useParams();
  const {
    threadDetail,
    comments,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  const [inputComment, setInputComment] = useInput('');

  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch(asyncAddComment({ id: threadId, content: inputComment }));
  };

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(threadId));
  }, [threadId, dispatch]);

  return (
    <Card sx={{
      maxWidth: 1200,
      alignSelf: 'center',
      width: '100%',
    }}
    >
      {/* HEADER */}
      <CardHeader
        avatar={(<Avatar src={threadDetail?.owner?.avatar} />)}
        title={threadDetail?.owner?.name}
        subheader={convertDate(threadDetail?.createdAt)}
      />

      {/* CONTENT */}
      <CardContent sx={{ paddingBottom: '0px !important' }}>
        {/* TITLE */}
        <Typography
          variant="h6"
          fontWeight={600}
          marginBottom={20}
        >
          {threadDetail?.title}
        </Typography>

        {/* BODY */}
        <Box dangerouslySetInnerHTML={{ __html: threadDetail?.body }} />

        {/* COMMENT FORM */}
        <Stack
          margin="40px 0px"
          spacing={16}
          width="100%"
          component="form"
          onSubmit={submitFormHandler}
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
          {comments?.length}
          )
        </Typography>

        {comments?.length > 0 ? (
          // COMMENTS
          <Stack
            marginTop={12}
            divider={(
              <Divider
                orientation="horizontal"
                flexItem
              />
            )}
          >
            {comments?.map((item) => (
              <CommentItem
                key={item.id}
                avatar={item.owner.avatar}
                name={item.owner.name}
                createdTime={item.createdAt}
                content={item.content}
              />
            ))}
          </Stack>
        ) : (
          // NO COMMENTS TEXT
          <Typography
            color="text.secondary"
            marginTop={16}
            marginBottom={24}
          >
            No comments yet
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}

export default ThreadDetail;

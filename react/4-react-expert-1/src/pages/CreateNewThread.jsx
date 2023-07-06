/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

// MUIS
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// HOOKS
import useInput from '../hooks/useInput';

function CreateNewThread() {
  const [title, setTitle] = useInput('');
  const [content, setContent] = useInput('');

  return (
    <Stack
      width="100%"
      maxWidth={1200}
      alignSelf="center"
    >
      {/* TITLE */}
      <Typography
        variant="h6"
        color="text.primary"
        fontWeight={600}
        marginBottom={24}
      >
        Create a New Thread
      </Typography>

      {/* FORM */}
      <Stack
        spacing={16}
        width="100%"
        component="form"
        // onSubmit={submitFormHandler}
      >
        {/* TITLE INPUT */}
        <FormControl fullWidth>
          <InputLabel>
            Thread Title
          </InputLabel>

          <OutlinedInput
            autoFocus
            placeholder="Write your thread title here"
            type="text"
            name="title"
            label="Thread Title"
            value={title}
            onChange={setTitle}
          />
        </FormControl>

        {/* CONTENT INPUT */}
        <FormControl fullWidth>
          <InputLabel>
            Thread Content
          </InputLabel>

          <OutlinedInput
            autoFocus
            placeholder="Write your thread content here"
            type="text"
            name="content"
            label="Thread Content"
            multiline
            rows={4}
            value={content}
            onChange={setContent}
          />
        </FormControl>

        {/* SUBMIT BUTTON */}
        <Button
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
      </Stack>
    </Stack>
  );
}

export default CreateNewThread;

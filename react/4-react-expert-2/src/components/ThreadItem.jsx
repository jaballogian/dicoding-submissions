/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import PropTypes from 'prop-types';

// DATE AND TIME
// eslint-disable-next-line import/no-extraneous-dependencies
import moment from 'moment';

// MUIS
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// MUI ICONS
import IconComment from '@mui/icons-material/Comment';
import IconOpenInNew from '@mui/icons-material/OpenInNew';

function ThreadItem(props) {
  const {
    id,
    body,
    createdTime,
    title,
    totalComments,
    name,
    avatar,
  } = props;

  return (
    <Card>
      {/* HEADER */}
      <CardHeader
        avatar={(<Avatar src={avatar} />)}
        action={(
          <Tooltip
            title="Open"
            placement="bottom"
          >
            <Link href={`/thread/${id}`}>
              <IconButton>
                <IconOpenInNew />
              </IconButton>
            </Link>
          </Tooltip>
        )}
        title={name}
        subheader={moment(createdTime).fromNow()}
      />

      {/* CONTENT */}
      <CardContent>
        {/* TITLE */}
        <Typography
          fontWeight={600}
          marginBottom={8}
        >
          {title}
        </Typography>

        {/* BODY */}
        <Box
          display="-webkit-box"
          overflow="hidden"
          sx={{
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 4,
          }}
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </CardContent>

      {/* ACTIONS */}
      <CardActions>
        {/* COMMENTS */}
        <Stack
          direction="row"
          spacing={8}
        >
          <IconComment />
          <Typography
            variant="body2"
            color="text.secondary"
          >
            {totalComments}
          </Typography>
        </Stack>
      </CardActions>
    </Card>
  );
}

ThreadItem.defaultProps = {
  id: '',
  body: '',
  createdTime: '',
  title: '',
  totalComments: 0,
  name: '',
  avatar: '',
};

ThreadItem.propTypes = {
  id: PropTypes.string,
  body: PropTypes.string,
  createdTime: PropTypes.string,
  title: PropTypes.string,
  totalComments: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
};

export default ThreadItem;

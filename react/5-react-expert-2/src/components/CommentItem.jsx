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
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

function CommentItem(props) {
  const {
    avatar,
    name,
    createdTime,
    content,
  } = props;

  return (
    <Card sx={{ boxShadow: 'unset', borderRadius: 'unset' }}>
      {/* HEADER */}
      <CardHeader
        avatar={(<Avatar src={avatar} />)}
        title={name}
        subheader={moment(createdTime).fromNow()}
        sx={{ padding: '16px 0px 8px' }}
      />

      {/* CONTENT */}
      <CardContent sx={{ padding: '8px 0px 16px' }}>
        {/* BODY */}
        <Box dangerouslySetInnerHTML={{ __html: content }} />
      </CardContent>
    </Card>
  );
}

CommentItem.defaultProps = {
  avatar: '',
  name: '',
  createdTime: '',
  content: '',
};

CommentItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  createdTime: PropTypes.string,
  content: PropTypes.string,
};

export default CommentItem;

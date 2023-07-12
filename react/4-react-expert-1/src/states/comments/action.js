/* eslint linebreak-style: ["error", "windows"] */
// UTILITIES
import api from '../../utilities/api';

const ActionType = {
  RECEIVE_COMMENTS: 'RECEIVE_COMMENTS',
  ADD_COMMENT: 'ADD_COMMENT',
};

function receiveCommentsActionCreator(comments) {
  return {
    type: ActionType.RECEIVE_COMMENTS,
    payload: {
      comments,
    },
  };
}

function addCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_COMMENT,
    payload: {
      comment,
    },
  };
}

// THUNK FUNCTION FOR CREATING COMMENT
function asyncAddComment({ id, content }) {
  return async (dispatch) => {
    try {
      const comment = await api.createThreadComment({ id, content });
      dispatch(addCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveCommentsActionCreator,
  addCommentActionCreator,
  asyncAddComment,
};

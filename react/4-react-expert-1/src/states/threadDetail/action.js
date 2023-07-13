/* eslint linebreak-style: ["error", "windows"] */
// REDUX
import { hideLoading, showLoading } from 'react-redux-loading-bar';

// STATES
import { receiveCommentsActionCreator } from '../comments/action';

// UTILITIES
import api from '../../utilities/api';

const ActionType = {
  RECEIVE_THREAD_DETAIL: 'RECEIVE_THREAD_DETAIL',
  CLEAR_THREAD_DETAIL: 'CLEAR_THREAD_DETAIL',
};

function receiveThreadDetailActionCreator(threadDetail) {
  return {
    type: ActionType.RECEIVE_THREAD_DETAIL,
    payload: {
      threadDetail,
    },
  };
}

function clearThreadDetailActionCreator() {
  return {
    type: ActionType.CLEAR_THREAD_DETAIL,
  };
}

// THUNK FUNCTION FOR RECEIVING THREAD DETAIL
function asyncReceiveThreadDetail(threadId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearThreadDetailActionCreator());

    try {
      const threadDetail = await api.getThreadDetail(threadId);
      dispatch(receiveThreadDetailActionCreator(threadDetail));
      dispatch(receiveCommentsActionCreator(threadDetail.comments));
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveThreadDetailActionCreator,
  clearThreadDetailActionCreator,
  asyncReceiveThreadDetail,
};

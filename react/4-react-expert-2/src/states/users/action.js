/* eslint linebreak-style: ["error", "windows"] */
// REDUX
import { hideLoading, showLoading } from 'react-redux-loading-bar';

// UTILITIES
import api from '../../utilities/api';

const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
};

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

// THUNK FUNCTION FOR REGISTERING THE USER
function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      await api.registerUser({ name, email, password });
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert(error.message);
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};

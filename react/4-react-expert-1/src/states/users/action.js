/* eslint linebreak-style: ["error", "windows"] */
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
  return async () => {
    try {
      await api.registerUser({ name, email, password });
    } catch (error) {
      alert(error.message);
    }
  };
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
};

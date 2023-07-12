/* eslint linebreak-style: ["error", "windows"] */
// UTILITIES
import api from '../../utilities/api';

// STATES
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

// THUNK FUNCTION FOR RECEIVING THE USERS AND THREADS
function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
  };
}

export default asyncPopulateUsersAndThreads;

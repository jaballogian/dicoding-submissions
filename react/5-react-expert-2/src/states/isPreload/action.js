/* eslint linebreak-style: ["error", "windows"] */
// REDUX
import { hideLoading, showLoading } from 'react-redux-loading-bar';

// STATES
import { setAuthUserActionCreator } from '../authUser/action';

// UTILITIES
import api from '../../utilities/api';

const ActionType = {
  SET_IS_PRELOAD: 'SET_IS_PRELOAD',
};

function setIsPreloadActionCreator(isPreload) {
  return {
    type: ActionType.SET_IS_PRELOAD,
    payload: {
      isPreload,
    },
  };
}

// THUNK FUNCTION TO CHECK THE AUTH USER STATE
function asyncPreloadProcess() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      // preload process
      const authUser = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      // fallback process
      dispatch(setAuthUserActionCreator(null));
    } finally {
      // end preload process
      dispatch(setIsPreloadActionCreator(false));
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};

/* eslint linebreak-style: ["error", "windows"] */
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
  };
}

export {
  ActionType,
  setIsPreloadActionCreator,
  asyncPreloadProcess,
};

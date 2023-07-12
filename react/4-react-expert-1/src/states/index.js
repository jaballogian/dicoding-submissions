/* eslint linebreak-style: ["error", "windows"] */
// REDUX
import { configureStore } from '@reduxjs/toolkit';

// STATES
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    threadDetail: threadDetailReducer,
    threads: threadsReducer,
    users: usersReducer,
  },
});

export default store;

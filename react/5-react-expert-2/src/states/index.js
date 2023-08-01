/* eslint linebreak-style: ["error", "windows"] */
// REDUX
import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';

// STATES
import authUserReducer from './authUser/reducer';
import commentsReducer from './comments/reducer';
import isPreloadReducer from './isPreload/reducer';
import threadDetailReducer from './threadDetail/reducer';
import threadsReducer from './threads/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    comments: commentsReducer,
    isPreload: isPreloadReducer,
    loadingBar: loadingBarReducer,
    threadDetail: threadDetailReducer,
    threads: threadsReducer,
    users: usersReducer,
  },
});

export default store;

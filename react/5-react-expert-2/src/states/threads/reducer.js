/* eslint linebreak-style: ["error", "windows"] */
// STATES
import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [...threads, action.payload.thread];
    default:
      return threads;
  }
}

export default threadsReducer;

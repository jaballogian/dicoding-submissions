/* eslint linebreak-style: ["error", "windows"] */
import { ActionType } from './action';

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_THREADS:
      return action.payload.threads;
    case ActionType.ADD_THREAD:
      return [...threads, action.payload.threads];
    default:
      return threads;
  }
}

export default threadsReducer;

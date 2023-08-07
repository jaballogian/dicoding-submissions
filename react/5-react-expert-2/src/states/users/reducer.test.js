/* eslint linebreak-style: ["error", "windows"] */

// TEST SCENARIOS

// usersReducer function

// - should return the initial state when given by unknown action
// - should return the users when given by RECEIVE_USERS action

// TESTS
import { describe, it, expect } from 'vitest';

// STATES
import usersReducer from './reducer';

describe('usersReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // ARRANGE
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // ACTION
    const nextState = usersReducer(initialState, action);

    // ASSERT
    expect(nextState).toEqual(initialState);
  });

  it('should return the users when given by RECEIVE_USERS action', () => {
    // ARRANGE
    const initialState = [];

    const action = {
      type: 'RECEIVE_USERS',
      payload: {
        users: [
          {
            id: 'user-aROWej8yYA1sOfHN',
            name: 'Dicoding',
            email: 'admin@dicoding.com',
            avatar: 'https://ui-avatars.com/api/?name=Dicoding&background=random',
          },
          {
            id: 'user-mQhLzINW_w5TxxYf',
            name: 'Dimas Saputra',
            email: 'dimas@dicoding.com',
            avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
          },
        ],
      },
    };

    // ACTION
    const nextState = usersReducer(initialState, action);

    // ASSERT
    expect(nextState).toEqual(action.payload.users);
  });
});

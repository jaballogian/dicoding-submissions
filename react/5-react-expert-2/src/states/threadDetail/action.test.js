/**
 * @jest-environment jsdom
*/

/* eslint-disable no-underscore-dangle */
/* eslint linebreak-style: ["error", "windows"] */
/* eslint-disable max-len */

// TEST SCENARIOS

// asyncReceiveThreadDetail function

// should dispatch action correctly when data fetching success
// should dispatch action and call alert correctly when data fetching failed

// TESTS
import {
  describe, beforeEach, afterEach, it, vi, expect,
} from 'vitest';

// STATES
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import { asyncReceiveThreadDetail, receiveThreadDetailActionCreator } from './action';
import { receiveCommentsActionCreator } from '../comments/action';

// UTILITIES
import api from '../../utilities/api';

const fakeThreadDetailResponse = {
  id: 'thread-Np47p4jhUXYhrhRn',
  title: 'Bagaimana pengalamanmu belajar Redux?',
  body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
  createdAt: '2023-05-29T07:55:52.266Z',
  owner: {
    id: 'user-mQhLzINW_w5TxxYf',
    name: 'Dimas Saputra',
    avatar: 'https://ui-avatars.com/api/?name=Dimas Saputra&background=random',
  },
  category: 'redux',
  comments: [],
  upVotesBy: [],
  downVotesBy: [],
};

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._getThreadDetail = api.getThreadDetail;
  });

  afterEach(() => {
    api.getThreadDetail = api._getThreadDetail;

    // DELETE BACKUP DATA
    delete api._getThreadDetail;
  });

  it('should dispatch action correctly when data fetching success', async () => {
    // ARRANGE
    api.getThreadDetail = () => Promise.resolve(fakeThreadDetailResponse);

    const dispatch = vi.fn();

    // ACTION
    await asyncReceiveThreadDetail()(dispatch);

    // ASSERT
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadDetailActionCreator(fakeThreadDetailResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveCommentsActionCreator(fakeThreadDetailResponse.comments));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    // ARRANGE
    api.getThreadDetail = () => Promise.reject(fakeErrorResponse);

    const dispatch = vi.fn();
    window.alert = vi.fn();

    // ACTION
    await asyncReceiveThreadDetail()(dispatch);

    // ASSERT
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });
});

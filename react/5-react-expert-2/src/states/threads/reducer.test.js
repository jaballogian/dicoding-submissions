/* eslint linebreak-style: ["error", "windows"] */

// TEST SCENARIOS

// threadsReducer function

// - should return the initial state when given by unknown action
// - should return the threads when given by RECEIVE_THREADS action
// - should return the threads with the new thread when given by ADD_THREAD action

// TESTS
import { describe, it, expect } from 'vitest';

// STATES
import threadsReducer from './reducer';

describe('threadsReducer function', () => {
  it('should return the initial state when given by unknown action', () => {
    // ARRANGE
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // ACTION
    const nextState = threadsReducer(initialState, action);

    // ASSERT
    expect(nextState).toEqual(initialState);
  });

  it('should return the threads when given by RECEIVE_THREADS action', () => {
    // ARRANGE
    const initialState = [];

    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        talks: [
          {
            id: 'thread-Np47p4jhUXYhrhRn',
            title: 'Bagaimana pengalamanmu belajar Redux?',
            body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
            category: 'redux',
            createdAt: '2023-05-29T07:55:52.266Z',
            ownerId: 'user-mQhLzINW_w5TxxYf',
            totalComments: 0,
            upVotesBy: [],
            downVotesBy: [],
          },
          {
            id: 'thread-91KocEqYPRz68MhD',
            title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu',
            body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>- Siapa kamu dan dari mana kamu berasal?</div><div>- Apa pekerjaan atau pendidikan kamu saat ini?</div><div>- Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
            category: 'perkenalan',
            createdAt: '2023-05-29T07:54:35.746Z',
            ownerId: 'user-aROWej8yYA1sOfHN',
            totalComments: 1,
            upVotesBy: ['user-mQhLzINW_w5TxxYf'],
            downVotesBy: [],
          },
        ],
      },
    };

    // ACTION
    const nextState = threadsReducer(initialState, action);

    // ASSERT
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return the threads with the new thread when given by ADD_THREAD action', () => {
    // ARRANGE
    const initialState = [
      {
        id: 'thread-Np47p4jhUXYhrhRn',
        title: 'Bagaimana pengalamanmu belajar Redux?',
        body: 'Coba ceritakan dong, gimana pengalaman kalian belajar Redux di Dicoding?',
        category: 'redux',
        createdAt: '2023-05-29T07:55:52.266Z',
        ownerId: 'user-mQhLzINW_w5TxxYf',
        totalComments: 0,
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'ADD_THREAD',
      payload: {
        thread: {
          id: 'thread-91KocEqYPRz68MhD',
          title: 'Halo! Selamat datang dan silakan perkenalkan diri kamu',
          body: '<div>Bagaimana kabarmu? Semoga baik-baik saja ya. Sekali lagi saya ucapkan selamat datang semuanya!</div><div><br></div><div>Seperti yang sudah disampaikan sebelumnya, pada diskusi ini kamu bisa memperkenalkan diri kamu dan juga berkenalan dengan teman sekelas lainnya.</div><div><br></div><div>Berhubungan baik dengan teman sekelas dan instruktur merupakan bagian penting dari pembelajaran di kelas ini, karena mereka dapat membantu jika kamu mengalami kendala dalam mempelajari dan memahami materi.&nbsp;&nbsp;</div><div><br></div><div>Oleh karena itu, luangkanlah waktumu untuk saling mengenal dan mencairkan suasana. Membangun interaksi dengan siswa lain akan membuat pengalaman belajar kamu jauh lebih menyenangkan dan menarik.&nbsp;</div><div><br></div><div>Beberapa hal yang dapat kamu tulis pada perkenalan diri:</div><div><br></div><div>- Siapa kamu dan dari mana kamu berasal?</div><div>- Apa pekerjaan atau pendidikan kamu saat ini?</div><div>- Kenapa kamu mengambil pelatihan ini? Apakah mungkin karena kamu sedang mengejar perubahan dalam karir, atau lainnya?</div>',
          category: 'perkenalan',
          createdAt: '2023-05-29T07:54:35.746Z',
          ownerId: 'user-aROWej8yYA1sOfHN',
          totalComments: 1,
          upVotesBy: ['user-mQhLzINW_w5TxxYf'],
          downVotesBy: [],
        },
      },
    };

    // ACTION
    const nextState = threadsReducer(initialState, action);

    // ASSERT
    expect(nextState).toEqual([...initialState, action.payload.thread]);
  });
});

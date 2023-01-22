import { describe, it, expect, vi, beforeAll } from 'vitest';
import reducer, {
  createComment,
  createReply,
  commentSlice,
} from '../comments.slice';

const systemTime = '2020-03-31T19:00:00.000Z';

describe('comments slice', () => {
  beforeAll(() => {
    vi.setSystemTime(new Date(systemTime));
  });
  it('createComment action', () => {
    expect(
      reducer(
        {
          entities: {},
          ids: [],
          nextId: 1,
        },
        createComment({ text: 'hello' })
      )
    ).toEqual({
      ...commentSlice.getInitialState(),
      entities: {
        1: {
          id: 1,
          children: [],
          date: systemTime,
          text: 'hello',
        },
      },
      nextId: 2,
      ids: [1],
    });
  });
  it('createReply', () => {
    const state = reducer(
      {
        ids: [1],
        entities: {
          1: {
            id: 1,
            children: [],
            date: systemTime,
            text: 'hello',
          },
        },
        nextId: 2,
      },
      createReply({ id: 1, text: 'reply' })
    );
    expect(state.entities[2]).toEqual({
      id: 2,
      children: [],
      date: systemTime,
      text: 'reply',
      depth: 1,
    });
    expect(state.entities[1].children).toEqual([2]);
    expect(state.nextId).toBe(3);
  });
});

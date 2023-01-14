import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Comment } from './comments.types';

export interface CommentState {
  entities: Record<number, Comment>;
  ids: number[];
  nextId: number;
}

const initialState: CommentState = {
  entities: {
    1: {
      id: 1,
      text: 'hello',
      children: [3],
      date: new Date('2022-01-06').toJSON(),
    },
    2: {
      id: 2,
      text: 'test',
      children: [],
      date: new Date('2022-05-06').toJSON(),
    },
    3: {
      id: 3,
      text: 'reply',
      children: [],
      date: new Date('2023-01-05').toJSON(),
    },
  },
  ids: [1, 2],
  nextId: 4,
};

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    createComment(state, action: PayloadAction<Partial<Comment>>) {
      state.entities = {
        ...state.entities,
        [state.nextId]: {
          id: state.nextId,
          children: [],
          date: new Date().toJSON(),
          text: '',
          ...action.payload,
        },
      };
      state.ids.push(state.nextId);
      state.nextId++;
    },
    createReply(state, action: PayloadAction<{ id: number; text: string }>) {
      const { id, text } = action.payload;
      const { depth = 0 } = state.entities[id];
      state.entities[state.nextId] = {
        id: state.nextId,
        text,
        children: [],
        depth: depth + 1,
        date: new Date().toJSON(),
      };
      state.entities[id].children.push(state.nextId);
      state.nextId++;
    },
  },
});

export const { createComment, createReply } = commentSlice.actions;

export default commentSlice.reducer;

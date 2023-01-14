import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { commentSlice } from '@/features/comments/comments.slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/es/storage';

const rootReducer = combineReducers({
  comments: commentSlice.reducer,
});

const persistedReducer = persistReducer({ key: 'root', storage }, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

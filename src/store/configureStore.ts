import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { api } from '../services/api.ts';
import { setupListeners } from '@reduxjs/toolkit/query';
import dashboardSlice from './dashboardSlice.ts';

const combinedReducers = combineReducers({
  dashboard: dashboardSlice,
  [api.reducerPath]: api.reducer,
});

const rootReducer: Reducer<ReturnType<typeof combinedReducers>> = (state, action) => {
  return combinedReducers(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import type { PreloadedState } from '@reduxjs/toolkit';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import { eventService } from '@entities/event/api';

const rootReducer = combineReducers({
  [eventService.reducerPath]: eventService.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  const store = configureStore({
    preloadedState,
    reducer: rootReducer,

    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(eventService.middleware),
  });

  setupListeners(store.dispatch);

  return store;
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

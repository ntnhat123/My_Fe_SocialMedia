import { persistCombineReducers } from 'redux-persist';
import { postReducer } from './post/reducers';
const storage = require('redux-persist/lib/storage').default;
const reducers = {
    post: postReducer,
};

const persistConfig = {
  key: 'root',
  storage,
};

// Setup Reducers
export const persistedRootReducer = persistCombineReducers(persistConfig, reducers);

export type RootState = ReturnType<typeof persistedRootReducer>;

export default persistedRootReducer;

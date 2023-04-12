import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contactsSlice';
import filtersSlice from './filtersSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  contacts: contactsSlice,
  filters: filtersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };

import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './contacts/contactsSlice';
import  filterSlice  from './contacts/filterSlice';
import { authReducer } from './auth/authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: rootReducer,
    filter: filterSlice,
  },
   middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

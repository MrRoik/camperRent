import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import advertsReducer from './advert/advertSlice';
//import filtersReducer from './advert/filtersSlise';

//const advertsPersistConfig = {
//  key: 'advertsData',
//  storage,
//  whitelist: ['favorites'],
//};

export const store = configureStore({
  reducer: {
    //advertsData: persistReducer(advertsPersistConfig, advertsReducer),
    //filters: filtersReducer.filtersReducer,
    adverts: advertsReducer.advertsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

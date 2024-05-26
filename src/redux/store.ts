import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, Store} from '@reduxjs/toolkit';
import {Persistor, persistReducer, persistStore} from 'redux-persist';
import rootReducer from './combiner';

type RootState = ReturnType<typeof rootReducer>;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['settings', 'languages'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<RootState> = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
const persistor: Persistor = persistStore(store);

export {store, persistor};

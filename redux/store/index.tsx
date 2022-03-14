import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
 persistStore,
 persistReducer,
 FLUSH,
 REHYDRATE,
 PAUSE,
 PERSIST,
 PURGE,
 REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
 

// ... import other reducers (slice) here
import { counterReducerName } from '../slices/counter';
import counterReducer from '../slices/counter';
 
const persistConfig = {
 key: 'root',
 version: 1,
 storage,
 whitelist: [counterReducerName],
}
 
const persistedReducer = persistReducer(persistConfig, combineReducers({
    counter:counterReducer
}));
 
export const store = configureStore({
 reducer: persistedReducer,
 middleware: (getDefaultMiddleware) =>
 getDefaultMiddleware({
   serializableCheck: {
     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
   },
 }),
})
 
export const persistor = persistStore(store)
 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

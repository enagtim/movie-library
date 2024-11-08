import { configureStore } from '@reduxjs/toolkit';
import favoritesSlice from './favorites.slice';
import usersSlice from './user.slice';

const store = configureStore({
    reducer: {
        favorites: favoritesSlice,
        profiles: usersSlice
    }
});
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
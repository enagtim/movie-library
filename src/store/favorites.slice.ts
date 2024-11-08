import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardFilmProps } from '../shared/ui/CardFilm/CardFilm.props';

interface FavoritesState {
    favorites: CardFilmProps[];
}
const initialState: FavoritesState = {
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]')
};
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState, 
    reducers: {
        addToFavorite: (state, action: PayloadAction<CardFilmProps>) => {
            const movieExisted = state.favorites.some(movie => movie.id === action.payload.id);
            if(!movieExisted){
                state.favorites.push(action.payload);
                localStorage.setItem('favorites', JSON.stringify(state.favorites));
            }
        },
        removeFavorite: (state, action: PayloadAction<CardFilmProps>) => {
            state.favorites = state.favorites.filter(movie => movie.id !== action.payload.id);
            localStorage.setItem('favorites', JSON.stringify(state.favorites));
        },
        resetFavorite: (state) => {
            state.favorites = [];
            localStorage.removeItem('favorites');
        }
    }
});
export const {addToFavorite, removeFavorite, resetFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
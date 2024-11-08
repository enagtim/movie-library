import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProfileProps {
    name: string; 
    isLogin: boolean;
};
interface UserState {
    username: string | null;
    isLogin: boolean;
    profiles: ProfileProps[];
}
const initialState: UserState = {
    username: null,
    isLogin: false,
    profiles: JSON.parse(localStorage.getItem('profiles') || '[]')
};
const usersSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            const profileName = action.payload;
            const existingProfile = state.profiles.find((profile) => profile.name === profileName);
            if(existingProfile){
                existingProfile.isLogin = true;
            }else{
                state.profiles.push({name: profileName, isLogin: true});
            }
            localStorage.setItem('profiles', JSON.stringify(state.profiles));
            state.username = profileName;
            state.isLogin = true;
        },
        logout: (state) => {
            state.profiles = state.profiles.map((profile) => 
                profile.name === state.username ? {...profile, isLogin: false} : profile
            );
            localStorage.setItem('profiles', JSON.stringify(state.profiles));
            state.username = null;
            state.isLogin = false;
        }
    }
});

export const {login, logout } = usersSlice.actions;
export default usersSlice.reducer;
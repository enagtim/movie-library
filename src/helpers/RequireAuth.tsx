import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { ProfileProps } from '../store/user.slice';


export const RequireAuth = ({ children }: { children: ReactNode }) => {
    const profiles = localStorage.getItem('profiles');
    const data: ProfileProps[] = profiles ? JSON.parse(profiles) : [];

    for (const profile of data) {
        if (profile.isLogin) {
            return children;
        };
    };
    return <Navigate replace to={'/login'} />;
};
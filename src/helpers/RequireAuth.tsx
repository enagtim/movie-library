import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';


export const RequireAuth = ({ children }: { children: ReactNode }) => {
    const profiles = localStorage.getItem('profiles');
    const data = profiles ? JSON.parse(profiles) : [];

    for (const profile of data) {
        if (profile.isLogin) {
            return children;
        };
    };
    return <Navigate replace to={'/login'} />;
};
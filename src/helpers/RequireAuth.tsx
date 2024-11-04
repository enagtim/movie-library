import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
    const profiles = localStorage.getItem('profiles');
    const data = profiles ? JSON.parse(profiles) : null;

    const isAuthorized = data.length > 0 && data[0].isLogin;

    if (!isAuthorized) {
        return <Navigate replace to={'/login'} />;
    };
    return children;
};
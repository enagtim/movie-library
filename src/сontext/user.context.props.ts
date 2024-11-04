import { ReactNode } from 'react';

export interface UserContextProps {
    children: ReactNode;
};
export interface ProfileProps {
    name: string, 
    isLogin: boolean;
};
export interface UserContextValue {
    profiles: ProfileProps[];
    username: string, 
    isLogin: boolean, 
    login: (name: string) => void;
    logout: () => void;
}
 
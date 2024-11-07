import { createContext } from 'react';
import { useState, useEffect } from 'react';
import { UserContextProps, ProfileProps, UserContextValue } from './user.context.props';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { resetFavorite } from '../store/favorites.slice';

export const UserContext = createContext<UserContextValue | null>(null);
export const UserContextProvider = ({ children }: UserContextProps) => {
  const [username, setUserName] = useState<string>('');
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [profiles, setProfiles] = useState<ProfileProps[]>([]);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const getlocalstorageData = localStorage.getItem('profiles');
    const data: ProfileProps[] | null = getlocalstorageData ? JSON.parse(getlocalstorageData) : null;
    if (Array.isArray(data)) {
      setProfiles(data);
      const loggedUser = data.find((profile) => profile.isLogin);
      if (loggedUser) {
        setUserName(loggedUser.name);
        setIsLogin(true);
      }
    } else {
      setProfiles([]);
    }
  }, []);

  const login = (name: string) => {
    const getlocalstorageData = localStorage.getItem('profiles') || '[]';
    const data: ProfileProps[] = JSON.parse(getlocalstorageData);
    const existingProfile = data.find((profile) => profile.name === name);

    if (existingProfile) {
      existingProfile.isLogin = true;
    } else {
      data.push({ name, isLogin: true });
    }
    localStorage.setItem('profiles', JSON.stringify(data));
    setUserName(name);
    setIsLogin(true);
    navigate('/');
  };
  const logout = () => {
    const getlocalstorageData = localStorage.getItem('profiles') || '[]';
    const data: ProfileProps[] = JSON.parse(getlocalstorageData);
    const updateProfile = data.map((profile) => {
      if (profile.name === username) {
        return { ...profile, isLogin: false };
      }
      return profile;
    });
    localStorage.setItem('profiles', JSON.stringify(updateProfile));
    setIsLogin(false);
    dispatch(resetFavorite());
    navigate('/login');
  };
  return (
    <UserContext.Provider
      value={{ profiles, username, isLogin, login, logout }}>{children}
    </UserContext.Provider>
  );
};

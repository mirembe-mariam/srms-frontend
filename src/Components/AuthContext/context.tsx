import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import api from '../../lib/axios';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token')
  );

  const fetchLoggedInUser = async (authToken: string) => {
    try {
      const res = await api.get('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setUser(res.data);
    } catch (error) {
      console.error('Failed to fetch user', error);
      logout(); 
    }
  };

  const login = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
    fetchLoggedInUser(token); 
  };
  

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    if (token) {
      fetchLoggedInUser(token);  
    } else {
      setUser(null);  
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

import React, {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
  } from 'react';
  import {jwtDecode} from 'jwt-decode';
  
  // Define the structure of the decoded JWT token
  interface DecodedToken {
    userId: string;
    email: string;
    name?: string;
    [key: string]: any; // to support other optional fields
  }
  
  // Define the user object stored in context
  interface User {
    id: string;
    email: string;
    name?: string;
    [key: string]: any;
  }
  
  // Define the AuthContext value structure
  interface AuthContextType {
    user: User | null;
    login: (token: string, userData?: Partial<User>) => void;
    logout: () => void;
    loading: boolean;
    isAuthenticated: boolean;
  }
  
  // Create context
  const AuthContext = createContext<AuthContextType | undefined>(undefined);
  
  // AuthProvider props type
  interface AuthProviderProps {
    children: ReactNode;
  }
  
  // AuthProvider component
  export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode<DecodedToken>(token);
          setUser({
            id: decoded.userId,
            email: decoded.email,
            name: decoded.name,
            ...decoded,
          });
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    }, []);
  
    const login = (token: string, userData?: Partial<User>) => {
      localStorage.setItem('token', token);
      const decoded = jwtDecode<DecodedToken>(token);
      setUser({
        id: decoded.userId,
        email: userData?.email || decoded.email,
        name: userData?.name || decoded.name,
        ...decoded,
        ...userData,
      });
    };
  
    const logout = () => {
      localStorage.removeItem('token');
      setUser(null);
    };
  
    return (
      <AuthContext.Provider
        value={{
          user,
          login,
          logout,
          loading,
          isAuthenticated: !!user,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };
  
  // Custom hook to use the auth context
  export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
  };
  
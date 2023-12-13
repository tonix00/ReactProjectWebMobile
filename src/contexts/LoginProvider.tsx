import { createContext, useContext, useState, ReactNode } from "react";

interface LoginContextProps {
  user: any; // Replace 'any' with the actual type of your user object
  token: string | null;
  setUser: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the actual type of your user object
  setToken: (token: string | null) => void;
}

const LoginContext = createContext<LoginContextProps>({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider: React.FC<LoginProviderProps> = ({ children }) => {
  const [user, setUser] = useState<any>({}); // Replace 'any' with the actual type of your user object
  // const [token, _setToken] = useState<string | null>(localStorage.getItem('ACCESS_TOKEN'));
  const [token, _setToken] = useState<string | null>("12345");

  const setToken = (newToken: string | null) => {
    _setToken(newToken);
    if (newToken) {
      localStorage.setItem('ACCESS_TOKEN', newToken);
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
    }
  };

  return (
    <LoginContext.Provider value={{
      user,
      token,
      setUser,
      setToken,
    }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);

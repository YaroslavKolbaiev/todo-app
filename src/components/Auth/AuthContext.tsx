import React, { useState } from 'react';
import { User } from '../../types/User';
import { AuthForm } from './AuthForm';

export const AuthContext = React.createContext<User | null>(null);

// export const AuthContext = React.createContext<User | null>({
//   products: [],
//   setProducts: () => {},
// });

type Props = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  if (!user) {
    return <AuthForm onLogin={setUser} />;
  }

  // const contextValue = {
  //   products,
  //   setProducts
  // };

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

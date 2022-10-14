import { AuthContext } from '/src/contexts/AuthContext';
import { useState } from 'react';
import { useRouter } from 'next/router';

const AuthenticationProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const router = useRouter();

  const signInHandler = (data) => setCurrentUser(data);

  const signOutHandler = () => {
    const requestOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    fetch(`https://cap-paraffin.herokuapp.com/users/sign_out`, requestOptions).then((response) => {
      if (response.ok) {
        setCurrentUser(undefined);
        if (router.pathname != '/') {
          router.push('/users/sign_in');
        }
      }
    });
  };

  const value = {
    currentUser: currentUser,
    signIn: signInHandler,
    signOut: signOutHandler,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthenticationProvider;

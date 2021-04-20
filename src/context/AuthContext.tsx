import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "../components/utils/Spinner";

interface userInterface {
  name: string;
  email: string;
  password: string;
  plan: string;
  role: string;
}

const testUser: userInterface = {
  email: "test@test.com",
  name: "Test User",
  plan: "Basic",
  role: "user",
  password: "password",
};

interface authContext {
  user: userInterface | null;
  logInUser: (email: string, password: string) => string | undefined;
  logOutUser: () => Promise<any> | void;
}

const defaultContext = {
  user: null,
  logInUser: (_: string, __: string) => "default",
  logOutUser: () => {},
};

export const AuthContext = React.createContext<authContext>(defaultContext);

export const AuthProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = useState<userInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const logInUser = (email: string, password: string) => {
    if (email === testUser.email && password === testUser.password) {
      setUser(testUser);
    } else {
      return "Invalid user or password" as string;
    }
  };

  const logOutUser = async () => {
    setLoading(true);

    setTimeout(() => {
      setUser(null);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (user) {
      console.log("Logged In ");
    } else {
      console.log("need to log in ");
    }

    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    logOutUser,
    logInUser,
    user,
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }
};

export const useAuth = () => {
  return useContext(AuthContext);
};

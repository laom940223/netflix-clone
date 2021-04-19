import React, { useContext, useEffect, useState } from "react";
import { EnumType } from "typescript";
import { Spinner } from "../components/utils/Spinner";

interface userInterface {
  name: string;
  role: string;
}

const defUser = {
  name: "user",
  role: "normal",
} as userInterface;

export const AuthContext = React.createContext<any | null>(null);

export const AuthProvider: React.FC<{}> = ({ children }) => {
  const [user, setUser] = useState<userInterface | null>(defUser);
  const [loading, setLoading] = useState<boolean>(true);

  const logInUser = async () => {
    setLoading(true);

    if (user) {
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setUser(defUser);
      setLoading(false);
    }, 1000);
  };

  const logOutUser = async () => {
    setLoading(true);

    if (!user) {
      setLoading(false);
      return;
    }

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

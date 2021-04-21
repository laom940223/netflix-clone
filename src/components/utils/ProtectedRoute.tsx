import React from "react";
import { Redirect, Route, RouteComponentProps } from "react-router";
import { useAuth } from "../../context/AuthContext";

interface protectedRoute {
  path: string;
  exact?: boolean;
  component?:
    | React.ComponentType<any>
    | React.ComponentType<RouteComponentProps<any>>
    | undefined;
}

export const ProtectedRoute: React.FC<protectedRoute> = ({
  children,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={() => {
        return user ? children : <Redirect to="/login" />;
      }}
    />
  );
};

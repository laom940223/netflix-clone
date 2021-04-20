import React from "react";
import { useAuth } from "../../context/AuthContext";
import "./Account.css";

export const Account: React.FC<{}> = () => {
  const { user } = useAuth();

  return (
    <div className="account">
      <div className="account__card">
        <div className="account__row">
          <h1 className="account__title">My account</h1>
          <p className="account__description">{`Hello: ${user?.name}`}</p>
          <p className="account__description">{`Your email: ${user?.email}`}</p>
          <p className="account__description">{`Your current plan is: ${user?.plan}`}</p>
        </div>
      </div>
    </div>
  );
};

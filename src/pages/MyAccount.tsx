import React from "react";
import { Account } from "../components/account/Account";
import { Footer } from "../components/footer/Footer";
import { NavBar } from "../components/navigation/NavBar";

export const MyAccount: React.FC<{}> = () => {
  return (
    <div>
      <NavBar />
      <Account />
      <Footer />
    </div>
  );
};

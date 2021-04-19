import React from "react";
import "./Footer.css";

export const Footer: React.FC<{}> = () => {
  return (
    <div className="footer">
      <div className="footer__row left">
        <p> Questions? Call</p>
      </div>
      <div className="footer__row">
        <div className="footer__col">
          <p>FAQ</p>
          <p>Cookie preferences</p>
        </div>

        <div className="footer__col">
          <p>FAQ</p>
          <p>Cookie preferences</p>
        </div>

        <div className="footer__col">
          <p>FAQ</p>
          <p>Cookie preferences</p>
        </div>

        <div className="footer__col">
          <p>FAQ</p>
          <p>Cookie preferences</p>
        </div>
      </div>
    </div>
  );
};

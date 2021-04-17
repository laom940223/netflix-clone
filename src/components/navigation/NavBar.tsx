import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=26
//https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fdisp%2F366be133850498.56ba69ac36858.png&f=1&nofb=1

const NavBarContainer = styled.nav<any>`
  position: fixed;
  top: 0;
  heigth: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  display: flex;
  background-color: ${({ black }) => (black ? "#111" : "rgba(1,1,1,0)")};
  justify-content: space-between;
  transition: all 0.4s;
`;

const NavLogoContainer = styled.div`
  heigth: 50px;
  width: 20%;
  margin-left: 2em;
`;

const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const NavAuthContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 2em;
`;

const NavAuth = styled.div``;

const AvatarImg = styled.img`
  heigth: 30px;
  width: 30px;
`;

export const NavBar: React.FC<{}> = () => {
  const [black, setBlack] = useState(true);

  useEffect(() => {
    const print = () => {
      if (window.scrollY < 100) {
        setBlack(false);
      } else {
        setBlack(true);
      }
    };

    window.addEventListener("scroll", print);

    return () => window.removeEventListener("scroll", print);
  }, []);

  return (
    <NavBarContainer black={black}>
      <NavLogoContainer>
        <Link to="/">
          <LogoImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Ffreepngimages.com%2Fwp-content%2Fuploads%2F2016%2F10%2Fnetflix-logo.png%3Ffit%3D624%252C390&f=1&nofb=1" />
        </Link>
      </NavLogoContainer>

      <NavAuthContainer>
        <NavAuth>
          <Link to="/login">
            <AvatarImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmir-s3-cdn-cf.behance.net%2Fproject_modules%2Fdisp%2F366be133850498.56ba69ac36858.png&f=1&nofb=1" />
          </Link>
        </NavAuth>
      </NavAuthContainer>
    </NavBarContainer>
  );
};

import styled from "styled-components";
import { MdFlashlightOn, MdFlashlightOff } from "react-icons/md";
import { NavLink } from "react-router-dom";

export const BackgroundNav = styled.nav`
  background-color: ${(props) => props.theme.navBar};
  display: flex;
  flex-direction: row;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;

export const DivFlexNav = styled.div`
  display: flex;
  align-items: center;
`

export const TitleNav = styled.h1`
  color: #fff;
  margin: 0;
  margin-left: 50px;
  margin-right: 15px;

  @media screen and (max-width: 600px) {
    margin-left: 20px;
    margin-right: 10px;
  }
`;

export const DivLinkTitle = styled.div`
  height: 80px;
  border-bottom: 2px solid ${(props) => props.theme.fontSecondary};
  margin-top: 60px;

  @media screen and (max-width: 600px) {
    width: 100%;
    align-items: center;
    font-size: 20px;
    &:hover {
      border: none;
    }
  }
`;

export const LinkTitle = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 1.2rem;
  align-items: center;

  &:hover {
    color: aqua;
    border-bottom: 1px solid aqua;
  }
`;

export const LinkHome = styled(NavLink)`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const IconLight = styled(MdFlashlightOn)`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

export const IconLightOff = styled(MdFlashlightOff)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
`;

export const MobileNav = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenuMobileWeb = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${(props) => props.theme.navBar};
    padding: 0;
  }
`;

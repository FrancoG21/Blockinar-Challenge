import React, { useState } from "react";
import { GoThreeBars } from "react-icons/go";
import { FaTimesCircle } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  BackgroundNav,
  DivFlexNav,
  DivLinkTitle,
  IconLight,
  IconLightOff,
  LinkHome,
  LinkTitle,
  MobileNav,
  NavMenuMobileWeb,
  TitleNav,
} from "./StyledNavBar";

export default function NavBar({ theme, setTheme }) {

  //Declaro mi estado local en falso
  const [click, setClick] = useState(false);

  //Función para setear estado al hacer click
  const handleClick = () => {
    setClick(!click);
  };

  //Función para setear el estado al modo oscuro/claro
  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  //Si esta en oscuro que me muestre el icono(linterna) en oscuro si no el claro
  const iconColor = theme === "dark" ? <IconLightOff /> : <IconLight />;

  return (
    <IconContext.Provider value={{ color: "fff" }}>
      <BackgroundNav>
        <DivFlexNav>
          <LinkHome to="/">
            <TitleNav>Valeryon Hotel</TitleNav>
          </LinkHome>
          <div onClick={handleTheme}>{iconColor}</div>
        </DivFlexNav>
        <MobileNav onClick={handleClick}>
          {click ? <FaTimesCircle /> : <GoThreeBars />}
        </MobileNav>
        <NavMenuMobileWeb onClick={handleClick} click={click}>
          <DivLinkTitle>
            <LinkTitle to="/rooms">Habitaciones</LinkTitle>
          </DivLinkTitle>
          <DivLinkTitle>
            <LinkTitle to="/bookings">Reservas</LinkTitle>
          </DivLinkTitle>
          <DivLinkTitle>
            <LinkTitle to="/form">Realiza tu reserva</LinkTitle>
          </DivLinkTitle>
        </NavMenuMobileWeb>
      </BackgroundNav>
    </IconContext.Provider>
  );
}

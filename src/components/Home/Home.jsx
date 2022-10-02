import React from "react";
import AboutBookings from "../AboutBookings/AboutBookings";
import Cards from "../Cards/Cards";
import Carrousel from "../Carrousel/Carrousel";
import CarrouselHotel from "../CarrouselHotel/CarrouselHotel";
import Service from "../Servicess/Service";
import { BackgroundHome, DivHome } from "./StyledHome";

export default function Home() {

  return (
    <BackgroundHome>
      <Carrousel />
      <DivHome>
        <Service />
        <Cards />
        <CarrouselHotel />
        <AboutBookings />
      </DivHome>
    </BackgroundHome>
  );
}

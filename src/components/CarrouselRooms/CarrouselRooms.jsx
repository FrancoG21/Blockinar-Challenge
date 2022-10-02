import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import {
  ImageCarrouselRoom,
  TitlteCarrouselRoom,
} from "./StyledCarrousleRooms";

export default function CarrouselRooms() {
  const info = [
    {
      name: "Confort",
      image:
        "https://www.domaine-pignada.es/sites/default/files/2018-05/chambre_confort_12.jpg",
    },
    {
      name: "Superior",
      image:
        "https://www.executivehotelsiena.com/wp-content/uploads/sites/311/2021/06/hotel-executive_hq_2-2200x1200.jpg",
    },
    {
      name: "Junior Suite",
      image:
        "http://www.hoteldelacasona.com/wp-content/uploads/2018/10/hab2-5.jpg",
    },
    {
      name: "Senior Suite",
      image:
        "http://hotelsolvictoria.com.ar/wp-content/uploads/2014/03/suit-senior-550x365.jpg",
    },
  ];

  return (
    <div>
      <Splide
        options={{
          rewind: false,
          gap: 10,
          perPage: 2,
          perMove: 1,
          padding: "1rem",
          pagination: false,
          breakpoints: {
            623: {
              perPage: 2,
              perMove: 1,
            },
            935: {
              perPage: 32,
              perMove: 1,
            },
            1247: {
              perPage: 2,
              perMove: 1,
            },
          },
        }}
      >
        {info?.map((data, index) => {
          return (
            <SplideSlide key={index}>
              <div>
                <TitlteCarrouselRoom>{data.name}</TitlteCarrouselRoom>
                <ImageCarrouselRoom
                  src={data.image}
                  alt="img not found"
                  width="100%"
                  height="400px"
                />
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

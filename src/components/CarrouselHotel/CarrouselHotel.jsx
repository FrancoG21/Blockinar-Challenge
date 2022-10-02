import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { ImageHotelCarrousel, NameCarrouselHotel, TitleCarrouselHotel } from "./StyledCarrouselHotel";

export default function CarrouselHotel() {

    const info = [
        {
          name: "Patio",
          image:
            "https://z.cdrst.com/foto/hotel-sf/1b27/granderesp/hotel-weare-la-paz-servicios-455faae.jpg",
        },
        {
            name: 'Piscina',
          image:
            "https://x.cdrst.com/foto/hotel-sf/1b27/granderesp/hotel-weare-la-paz-servicios-455fab0.jpg",
        },
        {
            name: 'Piscina',
          image:
            "https://y.cdrst.com/foto/hotel-sf/1b27/granderesp/hotel-weare-la-paz-servicios-455fab1.jpg",
        },
        {
            name: 'Sala de la merienda',
          image:
            "https://x.cdrst.com/foto/hotel-sf/1b27/granderesp/hotel-weare-la-paz-restauracion-455fab3.jpg",
        },
        {
            name: 'Buffet',
          image:
            "https://x.cdrst.com/foto/hotel-sf/1b27/granderesp/hotel-weare-la-paz-restauracion-455fab6.jpg",
        },
        {
            name: 'Sala de la cena',
          image:
            "https://x.cdrst.com/foto/hotel-sf/1b27/granderesp/hotel-weare-la-paz-restauracion-455fab7.jpg",
        },
        {
            name: 'Bar',
          image:
            "https://y.cdrst.com/foto/hotel-sf/1b27/granderesp/hotel-weare-la-paz-restauracion-455fab8.jpg",
        },
        {
            name: 'Jacuzzi',
          image:
            "https://y.cdrst.com/foto/hotel-sf/1b27/granderesp/hotel-weare-la-paz-general-c1ae579.jpg",
        },
        {
            name: 'Sala de masajes',
          image:
            "https://y.cdrst.com/foto/hotel-sf/1b27/granderesp/hotel-weare-la-paz-general-c1ae583.jpg",
        },
        {
            name: 'Buffet',
          image:
            "https://z.cdrst.com/foto/hotel-sf/1b27/granderesp/hotel-weare-la-paz-general-c1ae5d2.jpg",
        },
        {
            name: 'Lobby',
          image:
            "https://x.cdrst.com/foto/hotel-sf/1b27/granderesp/hotel-weare-la-paz-general-c1ae5d4.jpg",
        },
      ];

  return (
    <div>
        <div>
            <TitleCarrouselHotel>Más Sobre Nosotros</TitleCarrouselHotel>
        </div>
      <Splide
        options={{
          rewind: false,
          gap: 10,
          perPage: 2,
          perMove: 2,
          padding: "0.5rem",
          pagination: true,
          breakpoints: {
            623: {
              perPage: 2,
              perMove: 2,
            },
            935: {
              perPage: 32,
              perMove: 2,
            },
            1247: {
              perPage: 2,
              perMove: 2,
            },
          },
        }}
        // onMounted={() => {
        //   console.log("mounted");
        // }}
        // onUpdated={() => {
        //   console.log("updated");
        // }}
        // onMoved={() => {
        //   console.log("moved");
        // }}
        // onVisible={(splide, slide) => {
        //   console.log("visible", slide.index);
        // }}
      >
        {info?.map((data, index) => {
          return (
            <SplideSlide key={index}>
              <div>
                <NameCarrouselHotel>{data.name}</NameCarrouselHotel>
                <ImageHotelCarrousel
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

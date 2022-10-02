import React from "react";
import {
  TitlteAbout,
  CardAbout,
  BackgroundAbout,
  TitleAbout,
  TextAbout,
  DivCardAbout,
  DivGridAbout,
} from "./StyledAboutBookings";

export default function AboutBookings() {
  return (
    <BackgroundAbout>
      <TitlteAbout>Reservá la habitación ideal para tu viaje</TitlteAbout>
      <DivGridAbout>
        <DivCardAbout>
          <CardAbout>
            <div>
              <TitleAbout>¿Porqué hospedarte en nuestro hotel?</TitleAbout>
            </div>
            <div>
              <TextAbout>
                En un hotel tenés cero preocupaciones. Disfrutá dejar en las
                manos de otros la limpieza, el orden y, en algunos casos,
                incluso una o más comidas. Generalmente son muy seguros y poseen
                varias formas de pago. Además, los hoteles suelen contar con
                servicios extra que pueden serte útiles para tu viaje, como
                traslado al aeropuerto, estacionamiento, restaurante, entre
                otros.
              </TextAbout>
            </div>
          </CardAbout>
        </DivCardAbout>
        <DivCardAbout>
          <CardAbout>
            <div>
              <TitleAbout>Ventajas de nuestros alojamientos</TitleAbout>
            </div>
            <div>
              <TextAbout>
                Nuestro alojamiento, son como un departamento, podés sentirte
                como en casa. Disfrutá la libertad de moverte como quieras, en
                cualquier momento del día. Coordiná con nosotros la entrega de
                la llave, y hacé del lugar, tu hogar. Los alojamientos suelen
                ser más económicos que los hoteles para estadías de varios días
                en una misma ciudad.
              </TextAbout>
            </div>
          </CardAbout>
        </DivCardAbout>
        <DivCardAbout>
          <CardAbout>
            <div>
              <TitleAbout>¿Que te conviene según tu destino?</TitleAbout>
            </div>
            <div>
              <TextAbout>
                Si buscás relajarte y no preocuparte por nada, o viajás por
                pocos días, quizá te convenga hospedarte en nuestro hotel. Si te
                quedás más tiempo en el destino y te gusta disfrutar de la
                libertad de hacer tus propios planes, los alojamientos, como
                departamentos o casas, son ideales.
              </TextAbout>
            </div>
          </CardAbout>
        </DivCardAbout>
        <DivCardAbout>
          <CardAbout>
            <div>
              <TitleAbout>Tips para reservar en nuestro hotel</TitleAbout>
            </div>
            <div>
              <TextAbout>
                A la hora de elegir hospedarte en nuestro hotel, tené en cuenta los comentarios de
                otros viajeros que hayan estado ahí. También te recomendamos que
                nunca hagas transacciones de dinero por medios que no conozcas o
                no sean seguros. Cualquier duda que tengas de un hotel o un
                alojamiento, comunicate con nosotros.
              </TextAbout>
            </div>
          </CardAbout>
        </DivCardAbout>
      </DivGridAbout>
    </BackgroundAbout>
  );
}

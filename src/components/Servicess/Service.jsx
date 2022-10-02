import React from "react";
import {
  BackgroundService,
  CardService,
  DivFlex,
  DivFlexService,
  DivGridService,
  IconBed,
  IconForm,
  IconList,
  NavTitle,
  TextService,
  TitleService,
  TitleServices,
} from "./StyledServices";

export default function Service() {
  return (
    <BackgroundService>
      <div>
        <TitleServices>Nuestros Servicios</TitleServices>
      </div>
      <DivGridService>
        <DivFlexService>
          <NavTitle to="/rooms">
            <CardService>
              <DivFlex>
                <IconBed />
                <TitleService>Lista de nuestras habitaciones!</TitleService>
              </DivFlex>
              <DivFlex>
                <TextService>
                  Puedes ver todas nuestras habitaciones disponibles, junto a
                  sus caracteristicas
                </TextService>
              </DivFlex>
            </CardService>
          </NavTitle>
        </DivFlexService>
        <DivFlexService>
          <NavTitle to="/bookings">
            <CardService>
              <DivFlex>
                <IconList />
                <TitleService>Lista de las Reservas!</TitleService>
              </DivFlex>
              <div>
                <TextService>
                  Ver listado de todas nuestras reservas, con disponibilidad
                </TextService>
              </div>
            </CardService>
          </NavTitle>
        </DivFlexService>
        <DivFlexService>
          <NavTitle to="/form">
            <CardService>
              <DivFlex>
                <IconForm />
                <TitleService>Realiza tu Reserva!</TitleService>
              </DivFlex>
              <div>
                <TextService>
                  Puedes realizar una reserva de algunas de nuestras
                  habitaciones disponibles de manera inmediata, online y segura.
                </TextService>
              </div>
            </CardService>
          </NavTitle>
        </DivFlexService>
      </DivGridService>
    </BackgroundService>
  );
}

import React from "react";
import Shield from "../../assets/shield.png";
import Calendar from "../../assets/calendar.png";
import Quality from "../../assets/quality.png";
import {
  Card,
  DivCard,
  DivContent,
  DivGrid,
  ImageSecurity,
  TextCard,
  TitleCard,
} from "./StyledCards";

export default function Cards() {
  return (
    <div>
      <DivGrid>
        <DivCard>
          <Card>
            <div>
              <ImageSecurity src={Shield} />
            </div>
            <DivContent>
              <TitleCard>Seguridad</TitleCard>
              <TextCard>
                Seguridad en la reserva y en la instancia de nuestros huespedes
              </TextCard>
            </DivContent>
          </Card>
        </DivCard>
        <DivCard>
          <Card>
            <div>
              <ImageSecurity src={Quality} />
            </div>
            <DivContent>
              <TitleCard>Calidad</TitleCard>
              <TextCard>
                Brindamos la mejor atención a nuestros huespedes, buscamos
                comodidad y felicidad
              </TextCard>
            </DivContent>
          </Card>
        </DivCard>
        <DivCard>
          <Card>
            <div>
              <ImageSecurity src={Calendar} />
            </div>
            <DivContent>
              <TitleCard>Cancelación</TitleCard>
              <TextCard>
                Puedes cancelar cualquiera de tus reservas hechas en nuestro
                hotel sin ningun costo
              </TextCard>
            </DivContent>
          </Card>
        </DivCard>
      </DivGrid>
    </div>
  );
}

import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postBookings } from "../../redux/action";
import {
  Background,
  BackModal,
  Subtitle,
  TitleForm,
  Text,
  DivModal,
  ButtonCancel,
  ButtonAceptar,
  DivButtons
} from "./StyledModal";

export default function Modal({ children, state, setState, input }) {

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    // e.preventDefault();
    dispatch(postBookings(input));
    alert('Reserva Exitosa')
    navigate('/bookings')
    // console.log(input);
  };

  return (
    <Background>
      {
        input && (
        <BackModal>
            <TitleForm>COMPROBANTE DE RESERVA</TitleForm>
            <DivModal>
              <Subtitle>Nombre: </Subtitle>
              <Text>{input.first_name}</Text>
            </DivModal>
            <DivModal>
              <Subtitle>Apellido: </Subtitle>
              <Text>{input.last_name}</Text>
            </DivModal>
            <DivModal>
              <Subtitle>Invitados:</Subtitle>
              <Text>{input.number_of_guests}</Text>
            </DivModal>
            <DivModal>
              <Subtitle>Habitación: </Subtitle>
              <Text>{input.room_id}</Text>
            </DivModal>
            <DivModal>
              <Subtitle>Precio Total: </Subtitle>
              <Text> ${input.price_per_night}</Text>
            </DivModal>
            <DivModal>
              <Subtitle>CheckIn: </Subtitle>
              <Text>{input.check_in_date}</Text>
            </DivModal>
            <DivModal>
              <Subtitle>CheckOut:</Subtitle>
              <Text>{input.check_out_date}</Text>
            </DivModal>
          <DivButtons>
            <ButtonCancel onClick={() => setState(false)}>Cancelar</ButtonCancel>
            <ButtonAceptar onClick={() => handleSubmit()}>Aceptar</ButtonAceptar>
            {/* <ButtonAceptar onClick={() => setState(false)}>Aceptar</ButtonAceptar> */}
          </DivButtons>
        </BackModal>

        )
      }
      
    </Background>
  );
}

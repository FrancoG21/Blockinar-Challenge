import React, { useState } from "react";
import Modal from "../Modal/Modal";
import {
  BackgroundForm,
  ButtonSubmit,
  Campo,
  DivButtonSubmit,
  DivGrid,
  ErrorText,
  FormLabel,
  FormStyle,
  FormTitle,
  Input,
  DivInput,
} from "./StyledForm";

export default function Form() {
  const [state, setState] = useState(false);

  const [errors, setErrors] = useState({});

  //Funcion de validaciones para cada uno de los inputs
  function validate(input) {
    var errors = {};
    if (!input.first_name) {
      errors.first_name = "Nombre es requerido";
    } else if (input.first_name.length > 50) {
      errors.first_name = "No se permiten más de 50 caracteres";
    }
    if (!input.last_name) {
      errors.last_name = "Apellido es requerido";
    } else if (input.last_name.length > 50) {
      errors.last_name = "No se permiten mas de 50 caracteres";
    }
    if (!input.number_of_guests) {
      errors.number_of_guests = "Numero de invitados es requerido";
    } else if (input.number_of_guests > 4 || input.number_of_guests < 0) {
      errors.number_of_guests = "El min debe ser 0 y max debe ser 4";
    }
    if (!input.price_per_night) {
      errors.price_per_night = "Precio es requerido";
    } else if (input.price_per_night > 1000 || input.price_per_night < 0) {
      errors.price_per_night = "Precio min de 0 y max de 1000";
    }
    if (!input.check_in_date) {
      errors.check_in_date = "Fecha y Hora es requerida";
    }
    if (!input.check_out_date) {
      errors.check_out_date = "Fecha y Hora es requerida";
    }
    if (!input.room_id) {
      errors.room_id = "Numero de invitados es requerido";
    } else if (input.room_id > 10 || input.room_id < 0) {
      errors.room_id = "El min debe ser 0 y max debe ser 10";
    }
    return errors;
  }

  //Seteo mi estado local en valores vacios
  const [input, setInput] = useState({
    first_name: "",
    last_name: "",
    price_per_night: "",
    number_of_guests: "",
    check_in_date: "",
    check_out_date: "",
    room_id: "",
  });

  //Hago un copia del estado, y el valor que paso al input quiero que lo tome
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  //Validación al enviar info en caso de que quede un input este vacío, si no que se abra el modal
  const handleSend = (e) => {
    if (
      !input.first_name ||
      !input.last_name ||
      !input.number_of_guests ||
      !input.price_per_night ||
      !input.check_in_date ||
      !input.check_out_date ||
      !input.room_id
    ) {
      alert("Completar todos los campos");
    } else {
      alert("Aceptar en tu comprobante de Reserva");
      setState(!state);
    }
  };

  // console.log(state);

  return (
    <div>
      <BackgroundForm>
        {state && (
          <Modal state={state} setState={setState} input={input}></Modal>
        )}
        <FormStyle>
          <FormTitle>Realiza tu Reserva</FormTitle>
          <DivGrid>
            <div>
              <DivInput>
                <Campo>
                  <FormLabel>Nombre: </FormLabel>
                  <Input
                    type="text"
                    value={input.first_name}
                    name="first_name"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.first_name && (
                    <ErrorText>{errors.first_name}</ErrorText>
                  )}
                </Campo>
                <Campo>
                  <FormLabel>Apellido: </FormLabel>
                  <Input
                    type="text"
                    value={input.last_name}
                    name="last_name"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.last_name && (
                    <ErrorText>{errors.last_name}</ErrorText>
                  )}
                </Campo>
                <Campo>
                  <FormLabel>Invitados: </FormLabel>
                  <Input
                    type="number"
                    value={input.number_of_guests}
                    name="number_of_guests"
                    min="0"
                    max="4"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.number_of_guests && (
                    <ErrorText>{errors.number_of_guests}</ErrorText>
                  )}
                </Campo>
              </DivInput>
            </div>
            <DivInput>
              <div>
                <Campo>
                  <FormLabel>Precio por Noche: </FormLabel>
                  <Input
                    type="number"
                    value={input.price_per_night}
                    name="price_per_night"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.price_per_night && (
                    <ErrorText>{errors.price_per_night}</ErrorText>
                  )}
                </Campo>
                <Campo>
                  <FormLabel>Fecha de CheckIn: </FormLabel>
                  <Input
                    type="datetime-local"
                    step="1"
                    value={input.check_in_date}
                    name="check_in_date"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.check_in_date && (
                    <ErrorText>{errors.check_in_date}</ErrorText>
                  )}
                </Campo>
                <Campo>
                  <FormLabel>Fecha de CheckOut: </FormLabel>
                  <Input
                    type="datetime-local"
                    step="1"
                    value={input.check_out_date}
                    name="check_out_date"
                    onChange={(e) => handleChange(e)}
                  />
                  {errors.check_out_date && (
                    <ErrorText>{errors.check_out_date}</ErrorText>
                  )}
                </Campo>
              </div>
            </DivInput>
          </DivGrid>
          <Campo>
            <FormLabel>Habitación: </FormLabel>
            <Input
              type="number"
              value={input.room_id}
              name="room_id"
              min="0"
              max="10"
              onChange={(e) => handleChange(e)}
            />
            {errors.room_id && <ErrorText>{errors.room_id}</ErrorText>}
          </Campo>
        </FormStyle>
        <DivButtonSubmit>
          <ButtonSubmit onClick={() => handleSend()}>Enviar</ButtonSubmit>
        </DivButtonSubmit>
      </BackgroundForm>
    </div>
  );
}

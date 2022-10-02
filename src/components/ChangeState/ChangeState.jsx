import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { cleanBookingId, getBookingById } from "../../redux/action";
import {
  BackgroundState,
  ButtonBack,
  ButtonEnviar,
  DivForm,
  DivInputState,
  DivStateInput,
  ErrorText,
  FormEdit,
  InputEdit,
  InputState,
  LabelEdit,
  NavButtonBack,
  TextInput,
  TitleFormEdit,
} from "./StyledChangeState";

export default function ChangeState() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState({});

  const [errors, setErrors] = useState({});

  function validate(input) {
    var errors = {};
    if (!input.room_id) {
      errors.room_id = "Es necesario asignarle una habitación";
    } else if (input.room_id > 10 || input.room_id < 0) {
      errors.room_id = "Solo hay 10 habitaciones";
    }
    return errors;
  }

  const bookingsId = useSelector((state) => state.bookingsId);
  // console.log(bookingsId)

  useEffect(() => {
    dispatch(getBookingById(id));
    dispatch(cleanBookingId(dispatch));
  }, [dispatch, id]);

  const handleChanges = (e) => {
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
    // console.log(e.target.value)
  };
  // console.log(input);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .put(`https://api-challenge.blockinar.io/bookings/update/${id}`, input)
      .then((res) => {
        console.log(res);
        console.log(input);
        alert("Reserva Editada con Exito");
      })
      .then(() => {
        navigate("/bookings");
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <BackgroundState>
      <NavButtonBack to="/bookings">
        <ButtonBack />
      </NavButtonBack>
      <div>
        <FormEdit onSubmit={(e) => handleSubmit(e)}>
          <TitleFormEdit>Edita tu Reserva</TitleFormEdit>
          <DivForm>
            <DivStateInput>
              <LabelEdit>Nombre: </LabelEdit>
              <InputEdit
                type="text"
                placeholder={bookingsId.first_name}
                name="first_name"
                value={input.first_name}
                onChange={(e) => handleChanges(e)}
              />
            </DivStateInput>
            <DivStateInput>
              <LabelEdit>Apellido: </LabelEdit>
              <InputEdit
                type="text"
                placeholder={bookingsId.last_name}
                name="last_name"
                value={input.last_name}
                onChange={(e) => handleChanges(e)}
              />
            </DivStateInput>
            <DivStateInput>
              <LabelEdit>Habitación: </LabelEdit>
              <InputEdit
                type="number"
                placeholder={bookingsId.room_id}
                name="room_id"
                value={input.room_id}
                onChange={(e) => handleChanges(e)}
              />
              {errors.room_id && <ErrorText>{errors.room_id}</ErrorText>}
            </DivStateInput>
            <DivInputState>
              <LabelEdit>Estado: </LabelEdit>
              <InputState
                type="radio"
                name="booking_status"
                value="confirmed"
                onChange={(e) => handleChanges(e)}
              />{" "}
              <TextInput>Confirmado</TextInput>
              <InputState
                type="radio"
                name="booking_status"
                value="in_house"
                onChange={(e) => handleChanges(e)}
              />
              <TextInput>En Habitación</TextInput>
              <InputState
                type="radio"
                name="booking_status"
                value="cancelled"
                onChange={(e) => handleChanges(e)}
              />
              <TextInput>Cancelado</TextInput>
              <InputState
                type="radio"
                name="booking_status"
                value="checked_out"
                onChange={(e) => handleChanges(e)}
              />
              <TextInput>CheckOut</TextInput>
            </DivInputState>

            <div>
              <ButtonEnviar>Enviar</ButtonEnviar>
            </div>
          </DivForm>
        </FormEdit>
      </div>
    </BackgroundState>
  );
}

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllBookings } from "../../redux/action";
import Date from "../Date/Date";
import {
  BackgroundOrders,
  DivOrders,
  ImageBookings,
  TitleOrders,
  ButtonReset,
} from "./StyledHeaderBookings";

export default function HeaderBookings() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBookings());
  }, []);

  //Recargo mi estado a como esta desde un principio
  const resetBookings = (e) => {
    e.preventDefault();
    dispatch(getAllBookings());
  };

  return (
    <div>
      <ImageBookings />
      <BackgroundOrders>
        <TitleOrders>Busqueda: </TitleOrders>
        <DivOrders>
          <ButtonReset onClick={(e) => resetBookings(e)}>Recargar</ButtonReset>
          <Date />
        </DivOrders>
      </BackgroundOrders>
    </div>
  );
}

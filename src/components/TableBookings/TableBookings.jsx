import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllBookings } from "../../redux/action";
import ChartBookings from "../ChartBookings/ChartBookings";
import HeaderBookings from "../HeaderBookings/HeaderBookings";
import Orders from "../Orders/Orders";
import RoomReport from "../RoomReport/RoomReport";
import {
  AllFiles,
  BackgroundBookings,
  ButtonEdit,
  ColumnBooking,
  DivAz,
  FilesBooking,
  TableBooking,
  TitleAz,
} from "./StyledTableBooking";

export default function TableBookings() {
  //Estado vacio
  const [state, setState] = useState("");
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const bookingsNashe = useSelector((state) => state.bookings);
  // console.log(bookingsNashe);

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  // var pricetotal = `${bookingsNashe.map(i => i.price_per_night).reduce((prev, curr) => prev + curr, 0)}`
  // console.log('$' + pricetotal)

  // var nashe = `${bookingsNashe.map(i => i.check_in_date)}`
  // console.log(nashe)

  var months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // var d = new Date()
  // console.log(d)

  // var nameMonth = months[d.getMonth()];
  // console.log(nameMonth)

  // var fecha = `${bookingsNashe.map((i) => i.check_in_date)}`;
  // console.log(fecha);

  // var month = fecha.getMonth();
  // console.log(month)

  // var inHouse = `${bookingsNashe
  //   .map((i) => (i.booking_status === "in house" ? 1 : 0))
  //   .reduce((prev, curr) => prev + curr, 0)}`;
  // console.log(inHouse);

  //Ingresos Totales
  // var ingresosTotal = `${bookingsNashe.map(i => i.price_per_night).reduce((prev, curr) => prev + curr, 0)}`
  // console.log('$' + ingresosTotal)

  return (
    <BackgroundBookings>
      <HeaderBookings />

      <DivAz>
        <TitleAz>Ordenamiento: </TitleAz>
        {/* Envio los seteos de estados a mi ordenamiento */}
        <Orders setPage={setPage} setState={setState} />
      </DivAz>

      <TableBooking>
        <thead>
          <tr>
            <ColumnBooking>Reserva</ColumnBooking>
            <ColumnBooking>Habitación</ColumnBooking>
            <ColumnBooking>Nombre y Apellido</ColumnBooking>
            <ColumnBooking>Invitados</ColumnBooking>
            <ColumnBooking>Precio por noche</ColumnBooking>
            <ColumnBooking>Check In</ColumnBooking>
            <ColumnBooking>Check Out</ColumnBooking>
            <ColumnBooking>Estado</ColumnBooking>
          </tr>
        </thead>
        <tbody>
          {bookingsNashe?.map((booking) => (
            <tr key={booking.id}>
              <FilesBooking>#0{booking.id}</FilesBooking>
              <FilesBooking>
                N° {booking.room_id ? booking.room_id : "Pendiente"}
              </FilesBooking>
              <FilesBooking>
                {booking.first_name} {booking.last_name}
              </FilesBooking>
              <FilesBooking>{booking.number_of_guests}</FilesBooking>
              <FilesBooking>{booking.price_per_night}$</FilesBooking>
              <FilesBooking>{booking.check_in_date}</FilesBooking>
              <FilesBooking>{booking.check_out_date}</FilesBooking>
              {/* <FilesBooking>{booking.booking_status}</FilesBooking> */}
              <FilesBooking>
                {booking.booking_status === "cancelled"
                  ? "Cancelado"
                  : booking.booking_status === "in house"
                  ? "En Habitación"
                  : booking.booking_status === "checked out"
                  ? "Checked Out"
                  : booking.booking_status === "confirmed"
                  ? "Confirmado"
                  : "Confirmado"}
              </FilesBooking>

              <NavLink to={`/formState/${booking.id}`}>
                <ButtonEdit>Editar</ButtonEdit>
              </NavLink>
            </tr>
          ))}
        </tbody>
      </TableBooking>

      <RoomReport />

      <ChartBookings />
    </BackgroundBookings>
  );
}

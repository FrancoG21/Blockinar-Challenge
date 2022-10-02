import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../../redux/action";
import { FileHead, FileReportData, TableReport, TitleReport } from "./StyledRoomReport";

export default function RoomReport () {

    const dispatch = useDispatch();
    const bookingsReport = useSelector((state) => state.bookings.filter(i => i.booking_status === 'in house'));
    // console.log(bookingsReport)

    useEffect(() => {
        dispatch(getAllBookings())
    }, []);

    // var inHouseRoom = `${bookingsReport.filter(i => i.booking_status === 'cancelled')}`
    // console.table(inHouseRoom)

    // var getRomm = inHouseRoom === 'in house' ? 'in house' : inHouseRoom;

    //Precio por noche
    // var pricePerNight = `${bookingsReport.map(i => i.price_per_night)}`
    // console.log(pricePerNight)

    //Numero de invitados
    // var totalPerRoom = `${bookingsReport.map(i => i.number_of_guests + 1)}`
    // console.log(totalPerRoom);

    // var totalPrice = pricePerNight * totalPerRoom;
    // console.log(totalPrice)

    // var promCost = pricePerNight / totalPerRoom;
    
    //Total en la habitación
    // var totalPerRoom = guest + 1;
    // console.log(totalPerRoom)

    return (
        <div>
            <TitleReport>Costos Promedios</TitleReport>
            <div>
                {
                    bookingsReport?.map(ocuped => (
                        <TableReport key={ocuped.id}>
                            <thead>
                                <tr>
                                    <FileHead>Habitación</FileHead>
                                    <FileHead>Fecha de Entrada</FileHead>
                                    <FileHead>Fecha de Salida</FileHead>
                                    <FileHead>Invitados</FileHead>
                                    <FileHead>Precio por Noche</FileHead>
                                    <FileHead>Precio Total</FileHead>
                                    <FileHead>Costo Promedio</FileHead>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <FileReportData>{ocuped.room_id}</FileReportData>
                                    <FileReportData>{ocuped.check_in_date}</FileReportData>
                                    <FileReportData>{ocuped.check_out_date}</FileReportData>
                                    <FileReportData>{ocuped.number_of_guests}</FileReportData>
                                    <FileReportData>${ocuped.price_per_night}</FileReportData>
                                    {/* <FileReportData>${totalPrice}</FileReportData>
                                    <FileReportData>{promCost}</FileReportData> */}
                                </tr>
                            </tbody>
                        </TableReport>
                    ))
                }
            </div>
        </div>
    )
}
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRooms } from "../../redux/action";
import CarrouselRooms from "../CarrouselRooms/CarrouselRooms";
import ChartRooms from "../ChartrRooms/ChartRooms";
import HeaderRoom from "../HeaderRoom/HeaderRoom";
import "handsontable/dist/handsontable.full.css";
import {
  AllFiles,
  BackgroundRooms,
  ColumnTitle,
  FilesTitle,
  Table,
  DivInfo,
  DisplayOcupado,
  DivOcupado,
  Ocupado,
  DivDesocupado,
  Desocupado,
  ExcelButton,
  DivExcel,
  AllHeadFiles,
} from "./StyledTableRooms";

export default function TableRooms() {

  //Dispacho mis acciones
  const dispatch = useDispatch();

  //Cargo mi estado global en una constante
  const rooms = useSelector((state) => state.rooms);
  // console.table(rooms);

  //Cuando se forme el componente carga mi estado
  useEffect(() => {
    dispatch(getAllRooms());
  }, [dispatch]);

  // const excelExport = useRef(null);

  // Lo ejecuto para tener todas las funcionalidades del HandTable//Excel
  // registerAllModules();

  // const exportExcel = () => {
  //   const exportPlugin =
  //     excelExport.current.hotInstance.getPlugin("exportFile");

  //   exportPlugin.downloadFile("csv", {
  //     filename: "Habitaciones",
  //     fileExtension: "csv",
  //     fileColumn: "hila",
  //     mimeType: "text/csv",
  //   });
  // };

  return (
    <BackgroundRooms>

      <HeaderRoom />

      {/* <button onClick={() => exportExcel()}>Exportar Excel</button> */}
      {/* Declaro el readOnly={true} para que el cliente no pueda realizar cambios */}
      {/* <HotTable
        ref={excelExport}
        data={rooms}
        licenseKey="non-commercial-and-evaluation"
        >
        <HotColumn data="id" title="Habitación"/>
        <HotColumn data="category" title="Categoría"/>
        <HotColumn data="occupancy" title="Ocupación"/>
        <HotColumn data="max_occupancy" title="Max de Ocupantes"/>
      </HotTable> */}

      <DivInfo>
        <DisplayOcupado>
          <DivOcupado></DivOcupado>
          <Ocupado>Libre</Ocupado>
        </DisplayOcupado>
        <DisplayOcupado>
          <DivDesocupado></DivDesocupado>
          <Desocupado>Ocupada</Desocupado>
        </DisplayOcupado>
      </DivInfo>

      <Table>
        <thead>
          <AllHeadFiles>
            <ColumnTitle>Habitación</ColumnTitle>
            <ColumnTitle>Categoría</ColumnTitle>
            <ColumnTitle>Ocupación</ColumnTitle>
            <ColumnTitle>Max de Ocupantes</ColumnTitle>
          </AllHeadFiles>
        </thead>
        <tbody>
          {/* Recorro mi estado y traigo la información que necesito en un nuevo array */}
          {rooms.map((r, index) => (
            <AllFiles key={index} name={r.occupancy}>
              <FilesTitle>{r.id}</FilesTitle>
              <FilesTitle>{r.category}</FilesTitle>
              <FilesTitle>{r.occupancy ? "Ocupado" : "Libre"}</FilesTitle>
              <FilesTitle>{r.max_occupancy}</FilesTitle>
            </AllFiles>
          ))}
        </tbody>
      </Table>

      <DivExcel>
          {/* //Exporto en data la información que quiero que se envie al Execel */}
        <ExcelButton data={rooms}>Excel</ExcelButton>
      </DivExcel>

      <CarrouselRooms />

      <ChartRooms />
      
    </BackgroundRooms>
  );
}

import React from "react";
import Filters from "../Filters/Filters";
import {
  BackgroundFilters,
  ImagaHeader,
  TiitleFilters,
} from "./StyledHeaderRoom";

export default function HeaderRoom() {
  return (
    <div>
      <div>
        <ImagaHeader />
      </div>
      <BackgroundFilters>
        <TiitleFilters>Filtros:</TiitleFilters>
        <Filters />
      </BackgroundFilters>
    </div>
  );
}

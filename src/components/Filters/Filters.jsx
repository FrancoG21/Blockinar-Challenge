import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getAllRooms } from "../../redux/action";
import { 
  CenterSelect,
  Select
} from "./StyledFilters";

export default function Filters() {
  const dispatch = useDispatch();
  const [state, setState] = useState("");
  const [page, setPage] = useState(1);

  const rooms = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(filterCategory());
  }, []);

  const handleChange = (e) => {
    e.target.value === "All"
      ? dispatch(getAllRooms()) && setState("Nashe")
      : dispatch(filterCategory(e.target.value));
    setPage(1);
  };

  return (
    <CenterSelect>
      <Select onChange={(e) => handleChange(e)}>
        <option hidden value="category">
          Categorias
        </option>
        <option value="All">Todos</option>
        {rooms?.map((room) => (
          <option key={room.id} value={room.category}>
            {room.category}
          </option>
        ))}
      </Select>
    </CenterSelect>
  );
}

//Estados Globales
const initialState = {
  rooms: [],
  roomsId: [],
  allRooms: [],
  bookings: [],
  allBookings: [],
  bookingsId: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_ROOMS":
      return {
        ...state,
        //Guardo en mis estados todos las acciones que me llegan desde el archivo action
        rooms: action.payload,
        allRooms: action.payload,
      };
    case "GET_ROOMS_BY_ID":
      return {
        ...state,
        roomsId: action.payload,
      };
    case "PUT_ROOMS_BY_ID":
      return {
        ...state,
        roomsId: action.payload,
      };
    case "GET_ALL_BOOKINGS":
      return {
        ...state,
        bookings: action.payload,
      };
    case "GET_BOOKINGS_BY_ID":
      return {
        ...state,
        bookingsId: action.payload,
      };
    case "CLEAN_BOOKINGS":
      return {
        ...state,
        bookingsId: action.payload,
      };
    case "GET_BOOK_DATE":
      return {
        ...state,
        bookings: action.payload,
      };
    case "PUT_BOOKINGS_BY_ID":
      return {
        ...state,
        bookingsId: action.payload,
      };
    case "ORDER_ALPHABETIC":
      let orderAz =
      //Si mi estado es ascendente lo ordeno de mayor a menor(comparando a y b)
        action.payload === "A - Z"
          ? state.bookings.sort((a, b) => {
              if (a.first_name > b.first_name) {
                return 1;
              }
              if (a.first_name < b.first_name) {
                return -1;
              }
              return 0;
            })
          : state.bookings.sort((a, b) => {
              if (a.first_name > b.first_name) {
                return -1;
              }
              if (a.first_name < b.first_name) {
                return 1;
              }
              return 0;
            });
      // console.log(state.bookings);
      // console.log(orderAz);
      return {
        ...state,
        bookings: orderAz,
      };
    case "ORDER_DATE":
      let orderAllDate =
        action.payload === "A - Z"
          ? state.bookings.sort((a, b) => {
              if (a.check_in_date > b.check_in_date) {
                return 1;
              }
              if (a.check_in_date < b.check_in_date) {
                return -1;
              }
              return 0;
            })
          : state.bookings.sort((a, b) => {
              if (a.check_in_date > b.check_in_date) {
                return -1;
              }
              if (a.check_in_date < b.check_in_date) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        bookings: orderAllDate,
      };
    case "FILTER_CATEGORY":
      const allCat = state.allRooms;
      //Filtro mi estado por categorias e incluyo mi action.payload
      const catApi = allCat.filter((c) => c.category.includes(action.payload));
      const catDb = allCat.filter((d) => {
        //Filtro mi estado y lo recorro, lo comparo y si son iguales lo devuelvo
        for (let i = 0; i < d.category.length; i++) {
          if (d.category[i] === action.payload) return d;
        }
      });
      //Concateno ambos resultados
      const totalCategory = catApi.concat(catDb);
      return {
        ...state,
        rooms: totalCategory,
      };
    case "POST_BOOKINGS":
      return {
        ...state,
      };
    default: {
      return state;
    }
  }
}

export default rootReducer;

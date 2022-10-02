import axios from "axios";

export function getAllRooms() {
  return async function (dispatch) {
    var response = await axios.get(`https://api-challenge.blockinar.io/rooms`);

    return dispatch({
      type: "GET_ALL_ROOMS",
      payload: response.data,
    });
  };
}

export function getRoomsById(id) {
  return async function (dispatch) {
    var response = await axios.get(
      `https://api-challenge.blockinar.io/room/${id}`
    );

    return dispatch({
      type: "GET_ROOMS_BY_ID",
      payload: response.data,
    });
  };
}

export function getAllBookings() {
  return async function (dispatch) {
    var response = await axios.get(
      `https://api-challenge.blockinar.io/bookings`
    );

    return dispatch({
      type: "GET_ALL_BOOKINGS",
      payload: response.data,
    });
  };
}

export function getBookingById(id) {
  return async function (dispatch) {
    var response = await axios.get(
      `https://api-challenge.blockinar.io/bookings/${id}`
    );

    return dispatch({
      type: "GET_BOOKINGS_BY_ID",
      payload: response.data,
    });
  };
}

export function cleanBookingId() {
  return async function (dispatch) {
    dispatch({
      type: "CLEAN_BOOKINGS",
      payload: [],
    });
  };
}

export function getBookByDate(date) {
  return async function (dispatch) {
    var response = await axios.get(
      `https://api-challenge.blockinar.io/bookings?check_in=${date}`
    );

    return dispatch({
      type: "GET_BOOK_DATE",
      payload: response.data,
    });
  };
}

export function putBookingsById(id, input) {
  return async function (dispatch) {
    var response = await axios.put(
      `https://api-challenge.blockinar.io/bookings/update/${id}`,
      input
    );

    return dispatch({
      type: "PUT_BOOKINGS_BY_ID",
      payload: response.data,
    });
  };
}

export function putRoomsById(id, input) {
  return async function (dispatch) {
    var response = await axios.put(
      `https://api-challenge.blockinar.io/room/update${id}`,
      input
    );

    return dispatch({
      type: "PUT_ROOMS_BY_ID",
      payload: response.data,
    });
  };
}

export function orderAlphabetic(payload) {
  return {
    type: "ORDER_ALPHABETIC",
    payload,
  };
}

export function orderDate(payload) {
  return {
    type: "ORDER_DATE",
    payload,
  };
}

export function filterCategory(payload) {
  return {
    type: "FILTER_CATEGORY",
    payload,
  };
}

export function postBookings(payload) {
  return async function (dispatch) {
    try {
      let response = await axios.post(
        `https://api-challenge.blockinar.io/bookings/create`,
        payload
      );

      return dispatch({
        type: "POST_BOOKINGS",
        payload: response.data,
      });
    } catch (error) {
      // console.log(error)
      if (error.response) {
        console.log(error.response.data);
        //do something
      } else if (error.request) {
        console.log(error);
        //do something else
      } else if (error.message) {
        console.log(error);
        //do something other than the other two
      }
    }
  };
}

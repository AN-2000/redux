export const fetchUsersReq = () => {
  return {
    type: "FETCH_USERS_REQ",
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

export const fetchUsersFailure = (err) => {
  return {
    type: "FETCH_USERS_FAILURE",
    payload: err,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersReq());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchUsersSuccess(json));
      })
      .catch((err) => {
        dispatch(fetchUsersFailure(err));
      });
  };
};

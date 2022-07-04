export const setHobby = (payload) => {
  return {
    type: 'SET_HOBBY',
    payload,
  };
};
export const addHobby = (payload) => {
  return {
    type: 'ADD_HOBBY',
    payload,
  };
};
export const deleteHobby = (payload) => {
  return {
    type: 'DELETE_HOBBY',
    payload,
  };
};

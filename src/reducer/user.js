const useReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_HOBBY':
      return state;
    case 'ADD_HOBBY':
      return state;
    case 'DELETE_HOBBY':
      return state;
    default:
      return state;
  }
};

export default useReducer;

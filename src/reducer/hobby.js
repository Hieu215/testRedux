const initialState = {
  activeId: null,
  list: [],
};

const hobbyReducer = (state = initialState, actions) => {
  console.log(actions);
  switch (actions.type) {
    case 'ADD_HOBBY':
      const newList = [...state.list];
      newList.push(actions.payload);
      return {
        ...state,
        list: newList,
      };
    case 'SET_HOBBY':
      const newID = actions.payload.id;
      return {
        ...state,
        activeId: newID,
      };
    case 'DELETE_HOBBY':
      return state;
    default:
      return state;
  }
};

export default hobbyReducer;

import { produce } from 'immer'; // Immutable state management library

const initialState = [];

const cartReducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case 'ADD_ITEM':
        draft.push(action.payload);
        break;
      case 'REMOVE_ITEM':
        const itemIndex = draft.findIndex(item => item.id === action.payload);
        draft.splice(itemIndex, 1);
        break;
      case 'UPDATE_QUANTITY':
        const item = draft.find(item => item.id === action.payload.id);
        item.quantity = action.payload.quantity;
        break;
      // Handle other actions here
      default:
        return state;
    }
  });
};

export default cartReducer;

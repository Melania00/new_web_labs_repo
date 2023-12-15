export const addItem = (product) => ({
    type: 'ADD_ITEM',
    payload: product,
  });
  
  export const removeItem = (itemId) => ({
    type: 'REMOVE_ITEM',
    payload: itemId,
  });
  
  export const updateQuantity = (itemId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { id: itemId, quantity },
  });
  
  
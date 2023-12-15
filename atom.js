// store.js
import { atom, atomFamily } from "recoil";

export const fridgesAtom = atom({
  key: "fridges",
  default: [],
});

export const brandsAtom = atom({
  key: "brands",
  default: [],
});

export const selectedBrandsAtom = atom({
  key: "selectedBrands",
  default: [],
});

export const priceFromAtom = atom({
  key: "priceFrom",
  default: undefined,
});

export const priceToAtom = atom({
  key: "priceTo",
  default: undefined,
});

export const searchAtom = atom({
  key: "search",
  default: undefined,
});

export const selectedItemAtom = atom({
    key: "selectedItem",
    default: null,
  });

  const cartAtom = atom({
    key: 'cart',
    default: [],
  });
  
  const addToCartAction = (productId, quantity) => ({
    type: 'ADD_TO_CART',
    payload: { productId, quantity },
  });
  
  const removeFromCartAction = (productId) => ({
    type: 'REMOVE_FROM_CART',
  });
  
  const updateQuantityAction = (productId, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { productId, quantity },
  });

  const productDetailsAtom = atomFamily({
    key: 'productDetails',
    default: async (productId) => {
      const response = await fetch(`/api/products/${productId}`);
      const data = await response.json();
      return data;
    },
  });
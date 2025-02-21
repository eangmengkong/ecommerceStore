import { atom } from 'jotai';

// Load cart from localStorage (or start empty)
const savedCart = JSON.parse(localStorage.getItem('cart')) || [];

export const cartAtom = atom(savedCart);

export const cartActionsAtom = atom(
  (get) => get(cartAtom),
  (get, set, updateCart) => {
    const newCart = updateCart(get(cartAtom));
    set(cartAtom, newCart);
    localStorage.setItem('cart', JSON.stringify(newCart)); // Save to localStorage
  },
);

// Total price atom based on cart items
export const totalPriceAtom = atom((get) => {
  const cart = get(cartAtom);
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
});

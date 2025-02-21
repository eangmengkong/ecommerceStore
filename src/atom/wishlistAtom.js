import { atom } from 'jotai';

// Get wishlist from localStorage or use an empty array
const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

export const wishlistAtom = atom(savedWishlist);

// This updates localStorage whenever the wishlist changes
export const wishlistActionsAtom = atom(
  (get) => get(wishlistAtom),
  (get, set, updateWishlist) => {
    const newWishlist = updateWishlist(get(wishlistAtom));
    set(wishlistAtom, newWishlist);
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
  },
);

import { useAtom } from 'jotai';
import { wishlistAtom } from '../atom/wishlistAtom';
import { cartAtom } from '../atom/cartAtom'; // Import the cartAtom

import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const WishlistPage = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [wishlist, setWishlist] = useAtom(wishlistAtom);
  const navigate = useNavigate();

  // Function to remove item from wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prev) => {
      const updatedWishlist = prev.filter((item) => item.id !== productId);
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      );
    } else {
      setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    }
    // Remove from wishlist (state)
    setWishlist((prev) => {
      const updatedWishlist = prev.filter(
        (wishlistItem) => wishlistItem.id !== item.id,
      );
      // Update localStorage to remove the item
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };
  return (
    <div className="wrapper p-5">
      <h1 className="mb-4 text-2xl font-bold">Your Wishlist ❤️</h1>
      <button onClick={() => navigate('/home')} className="mb-4 text-blue-500">
        ← Back to Shopping
      </button>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-5 gap-5">
          {wishlist.map((item) => (
            <div className="border-2 p-5" key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                className="h-50 mt-2 h-[250px] w-[280px]"
              />
              <h3 className="mt-2 h-[60px] text-lg font-semibold">
                <span>{item.name}</span>
              </h3>
              <p className="font-bold text-green-600">${item.price}</p>
              <div className="mt-3 flex justify-between">
                <button
                  className="rounded bg-blue-500 px-4 py-2 text-white"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart 🛒
                </button>
                <FaTrash
                  className="cursor-pointer text-red-500"
                  onClick={() => removeFromWishlist(item.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

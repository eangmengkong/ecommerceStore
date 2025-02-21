import { useAtom } from 'jotai';
import { cartAtom, totalPriceAtom } from '../atom/cartAtom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CartPage = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [totalPrice] = useAtom(totalPriceAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, [setCart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const changeQuantity = (id, amount) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item,
    );
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="mx-auto p-5">
      <h1 className="mb-3 text-center text-2xl font-bold">🛒 Your Cart</h1>
      <button onClick={() => navigate('/home')} className="mb-4 text-blue-500">
        ← Back to Shopping
      </button>

      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border bg-white p-4 shadow-md"
            >
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto h-24 w-24"
              />
              <h2 className="mt-2 h-[60px] text-center text-lg font-semibold">
                <span>{item.name}</span>
              </h2>
              <p className="text-center text-gray-700">Price: ${item.price}</p>
              <div className="mt-2 flex items-center justify-center space-x-2">
                <button
                  onClick={() => changeQuantity(item.id, -1)}
                  className="rounded bg-gray-300 px-2"
                >
                  -
                </button>
                <span className="w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => changeQuantity(item.id, 1)}
                  className="rounded bg-gray-300 px-2"
                >
                  +
                </button>
              </div>
              <p className="mt-2 text-center">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="mt-2 block text-center text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="mt-6 flex justify-center">
          <div className="w-[400px] rounded-lg bg-white p-6 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800">
              Total: ${totalPrice.toFixed(2)}
            </h2>
            <button className="mt-4 w-full rounded-2xl bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:bg-blue-700 hover:shadow-lg">
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

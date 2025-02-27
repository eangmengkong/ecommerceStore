import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Hotdeals,
  Laptops,
  Cameras,
  Smartphones,
  Accessories,
  ProductSummary,
  TopSellingProduct,
} from '../api/product';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ShoppingCart } from 'lucide-react';
import { useAtom } from 'jotai';
import { cartActionsAtom } from '../atom/cartAtom';
import { wishlistActionsAtom } from '../atom/wishlistAtom';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  // addtocart
  const [cart, setCart] = useAtom(cartActionsAtom);
  const [showCartPopup, setShowCartPopup] = useState(false);
  const addToCart = (product) => {
    setCart((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [...prev, { ...product, quantity: 1 }],
    );
    setShowCartPopup(true);
    setTimeout(() => setShowCartPopup(false), 2000);
  };

  const [wishlist, setWishlist] = useAtom(wishlistActionsAtom);
  const [showPopup, setShowPopup] = useState(false);
  const addtowishlist = (item) => {
    setWishlist((prev) => {
      const isInWishlist = prev.some((w) => w.id === item.id);
      if (!isInWishlist) {
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
        return [...prev, item];
      }
      return prev;
    });
  };

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const allProducts = [
      ...Hotdeals,
      ...Laptops,
      ...Cameras,
      ...Smartphones,
      ...Accessories,
      ...ProductSummary.NewProduct,
      ...ProductSummary.TopSell,
      ...TopSellingProduct.Selling1,
      ...TopSellingProduct.Selling2,
      ...TopSellingProduct.Selling3,
    ];

    const foundProduct = allProducts.find((item) => item.id === Number(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="text-center text-gray-500">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <p>Sorry, the product you are looking for does not exist.</p>
      </div>
    );
  }

  const allProducts = [
    ...Hotdeals,
    ...Laptops,
    ...Cameras,
    ...Smartphones,
    ...Accessories,
    ...ProductSummary.NewProduct,
    ...ProductSummary.TopSell,
    ...TopSellingProduct.Selling1,
    ...TopSellingProduct.Selling2,
    ...TopSellingProduct.Selling3,
  ];

  const relatedProducts = allProducts
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <img
          src={product.img}
          alt={product.name}
          className="h-[20rem] w-[18.75rem] rounded-lg"
        />
        <div>
          <h2 className="mb-3 text-2xl font-bold">{product.name}</h2>
          <p className="mb-2 text-gray-600">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600">
            {product.price}$
          </p>
          <div className="flex gap-4">
            <button
              className="mt-4 rounded-lg bg-red-600 px-6 py-2 text-white hover:bg-red-700"
              onClick={() => addtowishlist(product)}
            >
              Add to Wishlist
            </button>
            {/* Add to Cart Button */}
            <button
              className="mt-4 rounded-lg bg-blue-600 px-6 py-2 text-white hover:bg-blue-700"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 flex items-center justify-center bg-black/40"
          >
            <div className="flex flex-col items-center gap-4 rounded-xl bg-white px-8 py-6 text-center shadow-2xl">
              <CheckCircle className="h-14 w-14 animate-pulse text-green-500" />
              <p className="text-2xl font-semibold text-gray-800">
                Add To Wishlist Successfully
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* cartpopup */}
      <AnimatePresence>
        {showCartPopup && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed right-5 top-5 flex w-64 flex-col gap-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <ShoppingCart className="h-6 w-6 text-white" />
              <p className="font-medium text-white">
                {' '}
                Add To Cart Successfully
              </p>
            </div>
            {/* Animated Progress Bar */}
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2 }}
              className="h-1 rounded bg-white"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-10">
        <h3 className="mb-4 text-xl font-semibold">Related Products</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {relatedProducts.map((related) => (
            <div key={related.id} className="rounded-lg border p-4 shadow-md">
              <Link to={`/productdetail/${related.id}`}>
                <img
                  src={related.img}
                  alt={related.name}
                  className="h-[20rem] w-[18.75rem] rounded"
                />
              </Link>
              <h4 className="mt-2 text-lg font-medium">{related.name}</h4>
              <p className="font-semibold text-blue-600">{related.price}$</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

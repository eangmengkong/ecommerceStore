import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

import { FaHeart, FaCartArrowDown } from 'react-icons/fa';

import { ProductSummary, TopSellingProduct } from '../../api/product';

import { useAtom } from 'jotai';
import { cartActionsAtom } from '../../atom/cartAtom';
import { wishlistActionsAtom } from '../../atom/wishlistAtom';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const CartItemNewProduct = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  // addtoCart

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

  // addtowishlist

  const [wishlist, setWishlist] = useAtom(wishlistActionsAtom);
  const [showPopup, setShowPopup] = useState(false);

  const addToWishlist = (item) => {
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
  return (
    <div>
      <div className="new-product-cart">
        <Carousel
          disableSwipeOnMobile
          disableDrag
          responsive={responsive}
          forSSR
          slidesToSlide={2}
          infinite={true}
          className="test"
          removeArrowOnDeviceType={['tablet', 'mobile']}
        >
          {ProductSummary.NewProduct.map((card, i) => (
            <div key={i} className="mr-2 place-items-center gap-2 border">
              <Link to={`/productdetail/${card.id}`}>
                <img src={card.img} alt="Product" />
              </Link>
              <div className="h-[6.25rem] place-items-center">
                <h4 className="text-[20px] font-bold">{card.cat}</h4>
                <h1>{card.name}</h1>
                <h3>{card.price} $</h3>
              </div>
              <div className="flex gap-3 p-2">
                <FaHeart
                  className={`cursor-pointer text-[1.5625rem] ${
                    wishlist.some((w) => w.id === card.id)
                      ? 'text-red-500'
                      : 'text-gray-500 hover:text-red-500'
                  }`}
                  onClick={() => addToWishlist(card)}
                />
                <FaCartArrowDown
                  className="cursor-pointer text-[2.1875rem] text-gray-500 hover:text-green-500"
                  onClick={() => addToCart(card)}
                />
              </div>
            </div>
          ))}
        </Carousel>
        {/* wishlistpopup */}
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
      </div>
    </div>
  );
};

export const CartItemTopSell = () => {
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

  const addToWishlist = (item) => {
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div>
      <div className="new-product-cart">
        <Carousel
          disableSwipeOnMobile
          disableDrag
          responsive={responsive}
          forSSR
          slidesToSlide={2}
          infinite={true}
          className="test"
          removeArrowOnDeviceType={['tablet', 'mobile']}
        >
          {ProductSummary.TopSell.map((card, i) => (
            <div key={i} className="mr-2 place-items-center gap-2 border">
              <Link to={`/productdetail/${card.id}`}>
                <img src={card.img} alt="Product" />
              </Link>
              <div className="h-[6.25rem] place-items-center">
                <h4 className="text-[20px] font-bold">{card.cat}</h4>
                <h1>{card.name}</h1>
                <h3>{card.price} $</h3>
              </div>
              <div className="flex gap-3 p-2">
                <div className="flex gap-3 p-2">
                  <FaHeart
                    className={`cursor-pointer text-[1.5625rem] ${
                      wishlist.some((w) => w.id === card.id)
                        ? 'text-red-500'
                        : 'text-gray-500 hover:text-red-500'
                    }`}
                    onClick={() => addToWishlist(card)}
                  />
                  <FaCartArrowDown
                    className="cursor-pointer text-[2.1875rem] text-gray-500 hover:text-green-500"
                    onClick={() => addToCart(card)}
                  />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        {/* wishlistpopup */}
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
      </div>
    </div>
  );
};

export const TopSelling = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:flex md:justify-between lg:flex lg:justify-between">
      {/* First Column */}
      <div className="w-[350px]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">TOP SELLING</h2>
          <div className="flex gap-2">
            <button className="btn-prev-1 rounded-full border p-2">
              <ChevronLeft size={18} />
            </button>
            <button className="btn-next-1 rounded-full border p-2">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.btn-next-1',
            prevEl: '.btn-prev-1',
          }}
          autoplay={{ delay: 5000 }}
          loop
          slidesPerView={1}
          spaceBetween={20}
        >
          {generateSlides(TopSellingProduct.Selling1)}
        </Swiper>
      </div>

      {/* Second Column */}
      <div className="w-[350px]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">TOP SELLING</h2>
          <div className="flex gap-2">
            <button className="btn-prev-2 rounded-full border p-2">
              <ChevronLeft size={18} />
            </button>
            <button className="btn-next-2 rounded-full border p-2">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.btn-next-2',
            prevEl: '.btn-prev-2',
          }}
          autoplay={{ delay: 7000 }}
          loop
          slidesPerView={1}
          spaceBetween={20}
        >
          {generateSlides(TopSellingProduct.Selling2)}
        </Swiper>
      </div>

      {/* Third Column */}
      <div className="w-[350px]">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">TOP SELLING</h2>
          <div className="flex gap-2">
            <button className="btn-prev-3 rounded-full border p-2">
              <ChevronLeft size={18} />
            </button>
            <button className="btn-next-3 rounded-full border p-2">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.btn-next-3',
            prevEl: '.btn-prev-3',
          }}
          autoplay={{ delay: 9000 }}
          loop
          slidesPerView={1}
          spaceBetween={20}
        >
          {generateSlides(TopSellingProduct.Selling3)}
        </Swiper>
      </div>
    </div>
  );
};

// Function to generate Swiper slides
const generateSlides = (products) => {
  return (
    <>
      <SwiperSlide>
        <div className="flex flex-col gap-4">
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 border-b p-4"
            >
              <Link to={`/productdetail/${product.id}`}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-20 w-20 object-cover"
                />
              </Link>
              <div>
                <p className="text-xs text-gray-500">{product.cat}</p>
                <p className="font-bold">{product.name}</p>
                <p className="font-bold text-red-500">
                  {product.price}$
                  <s className="text-gray-400">{product.oldPrice}$</s>
                </p>
              </div>
            </div>
          ))}
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col gap-4">
          {products.slice(3, 6).map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 border-b p-4"
            >
              <Link to={`/productdetail/${product.id}`}>
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-20 w-20 object-cover"
                />
              </Link>
              <div>
                <p className="text-xs text-gray-500">{product.cat}</p>
                <p className="font-bold">{product.name}</p>
                <p className="font-bold text-red-500">
                  {product.price}$
                  <s className="text-gray-400">{product.oldPrice}$</s>
                </p>
              </div>
            </div>
          ))}
        </div>
      </SwiperSlide>
    </>
  );
};

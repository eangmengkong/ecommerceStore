import { FaPhoneVolume, FaSearch } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
import { HiCurrencyDollar } from 'react-icons/hi';
import { FaUserAlt } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import {
  Hotdeals,
  Laptops,
  Cameras,
  Smartphones,
  Accessories,
  ProductSummary,
  TopSellingProduct,
} from '../../api/product';
import { useState } from 'react';

const Header = () => {
  const [search, setSearch] = useState(''); // Store the search term
  const [filteredItems, setFilteredItems] = useState([]); // Store filtered results

  // Combine all products into one array
  const allItems = [
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

  // Function to handle the search
  const handleSearch = (e) => {
    const query = e.target.value; // Get search query from input
    setSearch(query); // Update the search state

    // Filter items based on the search query
    const results = allItems.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredItems(results); // Update the filtered items
  };

  return (
    <div className="wrapper">
      <div className="container bg-gray-600">
        {/* header-info */}
        <div className="top-header mx-auto max-w-[75rem] p-2 text-white lg:flex lg:justify-between">
          {/* left */}
          <div className="hidden gap-3 lg:flex">
            <div className="flex items-center gap-1">
              <FaPhoneVolume className="text-red-700" />
              <h3>+855 11 222 333</h3>
            </div>
            <div className="flex items-center gap-1">
              <IoIosMail className="text-red-700" />
              <h3>mail@gmail.com</h3>
            </div>
            <div className="flex items-center gap-1">
              <FaLocationDot className="text-red-700" />
              <h3>Phnom Penh </h3>
            </div>
          </div>
          {/* Right */}
          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <HiCurrencyDollar className="text-red-700" />
              <h3>USD</h3>
            </div>
            <div className="flex items-center gap-1">
              <FaUserAlt className="text-red-700" />
              <h3>My Account</h3>
            </div>
          </div>
        </div>

        <div className="main-header-container bg-black py-4">
          <div className="mx-auto flex max-w-[75rem] items-center justify-between px-4">
            {/* Logo */}
            <img
              src={logo}
              alt="logo"
              className="hidden h-12 md:block lg:block"
            />

            <div className="flex w-full items-center gap-4 md:w-auto">
              {/* Search Bar */}
              <div className="relative w-full md:w-[250px] lg:w-[500px]">
                <div className="flex items-center rounded-lg border border-gray-300 bg-white p-2 shadow-md">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full outline-none"
                    onChange={handleSearch}
                  />
                  <FaSearch className="text-gray-500" />
                </div>

                {search && (
                  <ul className="absolute left-0 top-12 z-50 w-full rounded-lg border bg-white p-2 shadow-lg">
                    {filteredItems.length > 0 ? (
                      filteredItems.map((item) => (
                        <Link
                          to={`/productdetail/${item.id}`}
                          key={item.id}
                          onClick={() => {
                            setSearch('');
                            setFilteredItems([]);
                          }}
                        >
                          <li className="flex cursor-pointer items-center gap-3 p-2 hover:bg-gray-100">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="h-12 w-12 rounded-md"
                            />
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-gray-600">
                                ${item.price}
                              </div>
                            </div>
                          </li>
                        </Link>
                      ))
                    ) : (
                      <li className="p-2 text-center text-gray-500">
                        No results found
                      </li>
                    )}
                  </ul>
                )}
              </div>

              {/* Wishlist & Cart */}
              <div className="flex items-center gap-3 text-white">
                <Link to="/wishlist" className="flex flex-col items-center">
                  <FaRegHeart className="text-xl" />
                  <span className="hidden text-xs md:block">Wishlist</span>
                </Link>
                <Link to="/cart" className="flex flex-col items-center">
                  <FaShoppingCart className="text-xl" />
                  <span className="hidden text-xs md:block">Cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

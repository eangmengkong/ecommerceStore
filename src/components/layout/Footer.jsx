import { Facebook, Twitter, Instagram } from 'lucide-react';
import { FaPhoneVolume } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';
const Footer = () => {
  return (
    <div className="wrapper">
      <div className="container mx-auto my-4 max-w-[1200px]">
        {/* SignUpNewsLetter */}

        <div className="flex flex-col items-center justify-center gap-5">
          <h1>Sign Up for the NEWSLETTER</h1>
          <div className="flex">
            <input
              type="email"
              className="border p-3"
              placeholder="Enter Your Email"
            />
            <button className="bg-red-500 px-2 text-white">Subscribe</button>
          </div>
          <div className="flex gap-4">
            <Facebook className="w-[40px] border-2" />
            <Twitter className="w-[40px] border-2" />
            <Instagram className="w-[40px] border-2" />
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="bg-gray-700 py-10">
        <div className="mx-auto my-4 grid max-w-[1200px] grid-cols-2 text-white lg:flex lg:justify-between">
          <div className="w-[350px]">
            <h1 className="text-[30px] font-bold">About Us</h1>
            <div className="mt-5">
              <p className="w-[150px]">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut.
                </span>
              </p>
              <div className="mt-3 flex flex-col gap-3">
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
            </div>
          </div>
          <div className="w-[300px]">
            <h1 className="text-[30px] font-bold">Categories</h1>
            <div className="mt-5 flex flex-col gap-2">
              <span>Hot deal</span>
              <span>Laptops</span>
              <span>Smartphones</span>
              <span>Camera</span>
              <span>Accessories</span>
            </div>
          </div>
          <div className="w-[300px]">
            <h1 className="text-[30px] font-bold">Information</h1>

            <div className="mt-5 flex flex-col gap-2">
              <span>About Us</span>
              <span>Contact Us</span>
              <span>Privacy Policy</span>
              <span>Orders and Returns</span>
              <span>Terms & Conditions</span>
            </div>
          </div>
          <div className="w-[300px]">
            <h1 className="text-[30px] font-bold">Service</h1>

            <div className="mt-5 flex flex-col gap-2">
              <span>My Account</span>
              <span>View Cart</span>
              <span>Wishlist</span>
              <span>Track My Order</span>
              <span>Help</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

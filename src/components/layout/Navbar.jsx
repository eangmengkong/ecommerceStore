import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="wrapper">
      <div className="container mx-auto max-w-[75rem] py-4">
        <ul className="flex flex-wrap items-center justify-center gap-4 lg:flex">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? 'text-red-500 underline' : 'text-gray-700'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/hotdeals"
            className={({ isActive }) =>
              isActive ? 'text-red-500 underline' : 'text-gray-700'
            }
          >
            Hot Deals
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive ? 'text-red-500 underline' : 'text-gray-700'
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/laptops"
            className={({ isActive }) =>
              isActive ? 'text-red-500 underline' : 'text-gray-700'
            }
          >
            Laptops
          </NavLink>
          <NavLink
            to="/smartphones"
            className={({ isActive }) =>
              isActive ? 'text-red-500 underline' : 'text-gray-700'
            }
          >
            Smartphones
          </NavLink>
          <NavLink
            to="/cameras"
            className={({ isActive }) =>
              isActive ? 'text-red-500 underline' : 'text-gray-700'
            }
          >
            Cameras
          </NavLink>
          <NavLink
            to="/accessories"
            className={({ isActive }) =>
              isActive ? 'text-red-500 underline' : 'text-gray-700'
            }
          >
            Accessories
          </NavLink>
        </ul>
      </div>
      <hr className="h-5" />
    </div>
  );
};

export default Navbar;

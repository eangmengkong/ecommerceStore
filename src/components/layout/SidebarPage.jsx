import { useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
const SidebarPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="flex h-[500px]">
      {/* Sidebar */}
      <ProSidebar collapsed={collapsed} width="250px">
        <Menu iconShape="circle" className="h-full bg-gray-900 p-3 text-white">
          <MenuItem
            icon={<FaBars />}
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 transition-all duration-300 hover:text-white"
          >
            {collapsed ? '' : 'Toggle'}
          </MenuItem>

          <MenuItem icon={<FaHome />} className="rounded-lg hover:bg-gray-700">
            <Link to="/home">Home</Link>
          </MenuItem>

          <MenuItem icon={<FaUser />} className="rounded-lg hover:bg-gray-700">
            Profile
          </MenuItem>

          <MenuItem
            icon={<FaShoppingCart />}
            className="rounded-lg hover:bg-gray-700"
          >
            <Link to="/cart">Cart</Link>
          </MenuItem>

          <MenuItem
            icon={<FaRegHeart />}
            className="rounded-lg hover:bg-gray-700"
          >
            <Link to="/wishlist">Wishlist</Link>
          </MenuItem>

          <SubMenu
            title="Settings"
            icon={<FaCog />}
            className="rounded-lg hover:bg-gray-700"
          >
            <MenuItem className="rounded-lg hover:bg-gray-700">
              General
            </MenuItem>
            <MenuItem className="rounded-lg hover:bg-gray-700">
              Security
            </MenuItem>
          </SubMenu>

          <MenuItem
            icon={<FaSignOutAlt />}
            className="rounded-lg text-red-400 hover:bg-red-600 hover:text-white"
          >
            Logout
          </MenuItem>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SidebarPage;

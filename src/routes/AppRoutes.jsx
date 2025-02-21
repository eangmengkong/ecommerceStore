import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Hotdeals from '../pages/HotDealsPage';
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import CheckoutPage from '../pages/CheckoutPage';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CategoriesPage from '../pages/CategoriesPage';
import LaptopsPage from '../pages/LaptopsPage';
import SmartphonesPage from '../pages/SmartphonesPage';
import CameraPage from '../pages/CameraPage';
import AccessoriesPage from '../pages/AccessoriesPage';
import WishlistPage from '../pages/Wishlist';
import ProductDetails from '../pages/ProductDetailsPage';

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/hotdeals" element={<Hotdeals />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/laptops" element={<LaptopsPage />} />
        <Route path="/smartphones" element={<SmartphonesPage />} />
        <Route path="/cameras" element={<CameraPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/productdetail/:id" element={<ProductDetails />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;

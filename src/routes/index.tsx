import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import CartPage from "../features/cart/pages/CartPage";
import HomePage from "../features/home/pages/HomePage";
import ProductsPage from "../features/products/pages/ProductsPage";
import Footer from "../components/Footer";

export default function AppRoutes() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

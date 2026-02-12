import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../common/components/Navbar";
import CartPage from "../features/cart/pages/CartPage";
import HomePage from "../features/home/pages/HomePage";
import ProductsPage from "../features/products/pages/ProductsPage";
import Footer from "../common/components/Footer";
import ProductDetailPage from "../features/products/pages/ProductDetailPage";

export default function AppRoutes() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 bg-base-200">
          <div className="mx-auto w-full max-w-6xl px-4 py-6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:slug" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

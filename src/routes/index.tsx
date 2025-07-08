import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import ProductsPage from "../features/products/pages/ProductsPage";
import CartPage from "../features/cart/pages/CartPage";

export default function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsPage/>}/>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

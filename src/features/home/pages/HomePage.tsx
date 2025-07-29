import ProductsPage from "../../products/pages/ProductsPage";
import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <ProductsPage/>
    </div>
  );
}

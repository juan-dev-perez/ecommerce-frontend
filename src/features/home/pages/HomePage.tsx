import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <Hero />
      <Hero />
      {/* <Categories />
      <FeaturedProducts />
      <Discounts /> */}
    </div>
  );
}

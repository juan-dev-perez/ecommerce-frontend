import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="container px-4 py-24 mx-auto lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Descubre productos increibles
            </h1>
            <p className="mt-6 text-lg leading-8 text-purple-100">
              Shop the latest trends and find everything you need in one place.
              Quality products, unbeatable prices, and exceptional service.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link to="/products">
                <span
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  Shop Now
                </span>
              </Link>
              <Link to="/categories">
                <span
                  className="text-white border-white hover:bg-white hover:text-purple-600 bg-transparent"
                >
                  Browse Categories
                </span>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=600"
              alt="Hero Image"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

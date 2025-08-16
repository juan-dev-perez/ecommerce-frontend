import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="hero min-h-150"
      style={{
        backgroundImage:
          "url(/banner.png)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-xl">
          <h1 className="mb-5 text-5xl font-bold">
            ¡Bienvenido a la tienda gamer definitiva!
          </h1>
          <p className="mb-5">
            Descubre componentes de alto rendimiento para llevar tu PC al
            siguiente nivel. Ofrecemos procesadores, placas madre, memorias RAM
            y más, con las mejores ofertas y la calidad que los gamers exigen.
          </p>
          <Link to={'/products'} className="btn btn-primary">Ver productos</Link>
        </div>
      </div>
    </div>
  );
}

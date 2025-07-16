import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero bg-base-200 h-150">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            ¡Equipa tu PC gamer al mejor precio!
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Microprocesadores, motherboards, memoria y más. Calidad y rendimiento para tu setup.
          </p>
          <Link to="/products" className="btn btn-primary text-white">
            Explorar productos
          </Link>
        </div>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { useCart } from "../../store/cart.store";
import { formatPrice } from "../../utils/currencyFormat";
import { useState } from "react";
import { MegaMenu } from "./MegaMenu";

function Navbar() {
  const { getTotalItems, getTotalPrice } = useCart();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar shadow-sm sticky top-0 z-50 w-full backdrop-blur bg-white/80 supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-full items-center justify-between mx-auto">

        {/* Logo */}
        <Link to={"/"} className="flex items-center space-x-1">
          <div className="btn btn-sm btn-square btn-primary ">
            <span className="text-primary-foreground font-bold text-lg">
              TF
            </span>
          </div>
          <span className="font-bold text-xl">TecnoFix</span>
        </Link>

        {/* Parte central */}
        <div className="flex-1 flex items-center justify-center space-x-6">
          
          <div>
            <button
              onMouseEnter={() => setIsMenuOpen(true)}
              className="flex items-center space-x-2 py-2 rounded-md hover:bg-gray-100"
            >
              <span>Categorías</span>
              <svg
                className={`w-4 h-4 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <MegaMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            />
          </div>

          <div>Marcas</div>
          <div>Ofertas</div>

          {/* Barra de búsqueda */}
          <div className="w-full max-w-md ml-6">
            <input
              type="text"
              placeholder="Buscar productos, marcas y más..."
              className="input px-3 py-2 w-full"
            />
          </div>
        </div>

        {/* Carrito e informacion de usuario */}
        <div className="flex flex-row gap-4">

          {/* menu carrito */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span
                  className={`badge badge-sm indicator-item ${
                    totalItems === 0 && "invisible"
                  }`}
                >
                  {totalItems}
                </span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {totalItems || "Sin "} {totalItems === 1 ? "Item" : "Items"}
                </span>
                <span className="text-info">
                  Subtotal: {formatPrice(totalPrice)}
                </span>
                <div className="card-actions">
                  <Link to={"/cart"} className="btn btn-primary btn-block">
                    Ver carrito
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* menu usuario */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;

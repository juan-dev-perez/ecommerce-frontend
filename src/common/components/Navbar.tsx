import { Link } from "react-router-dom";
import { useCart } from "../../store/cart.store";
import { formatPrice } from "../../utils/currencyFormat";
import { useState } from "react";
import { MegaMenu } from "./MegaMenu";
import { SearchBar } from "./SearchBar";
import { ChevronDown, ShoppingCart } from "lucide-react";

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
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <MegaMenu
              isOpen={isMenuOpen}
              onClose={() => setIsMenuOpen(false)}
            />
          </div>

          <div>Marcas</div>
          <div>Ofertas</div>

          {/* Barra de búsqueda */}
          <SearchBar />
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
                <ShoppingCart size={22}/>
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

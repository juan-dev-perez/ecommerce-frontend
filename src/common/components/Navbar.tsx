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
    <header className="sticky top-0 z-50 border-b border-base-300 bg-base-100/80 backdrop-blur supports-[backdrop-filter]:bg-base-100/60">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="navbar px-0">
          {/* Logo */}
          <div className="flex">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="font-bold text-primary">TF</span>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-lg">TecnoFix</div>
                <div className="text-xs text-base-content/60 hidden sm:block">
                  Tech Store
                </div>
              </div>
            </Link>
          </div>

          {/* Centro (desktop) */}
          <div className="hidden lg:flex flex-1 min-w-80 items-center justify-center gap-2">
            <div className="relative">
              <button
                onMouseEnter={() => setIsMenuOpen(true)}
                className="btn btn-ghost btn-sm rounded-2xl"
              >
                Categorías
                <ChevronDown
                  size={18}
                  className={`transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            </div>

            <button className="btn btn-ghost btn-sm rounded-2xl">Marcas</button>
            <button className="btn btn-ghost btn-sm rounded-2xl">Ofertas</button>

            <div className="w-full max-w-md">
              <SearchBar />
            </div>
          </div>

          {/* Derecha */}
          <div className="flex items-center gap-2">
            {/* Search en mobile */}
            <div className="lg:hidden">
              <Link to="/products" className="btn btn-ghost btn-sm rounded-2xl">
                Buscar
              </Link>
            </div>

            {/* Carrito */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <ShoppingCart size={22} />
                  <span className={`badge badge-sm indicator-item ${totalItems === 0 ? "invisible" : ""}`}>
                    {totalItems}
                  </span>
                </div>
              </div>

              <div
                tabIndex={0}
                className="mt-3 w-64 rounded-3xl bg-base-100 border border-base-300 shadow-sm dropdown-content"
              >
                <div className="p-4">
                  <div className="font-semibold text-base">
                    {totalItems === 0 ? "Carrito vacío" : `${totalItems} ${totalItems === 1 ? "ítem" : "ítems"}`}
                  </div>
                  <div className="text-sm text-base-content/70 mt-1">
                    Subtotal: <span className="font-medium text-base-content">{formatPrice(totalPrice)}</span>
                  </div>

                  <div className="mt-4">
                    <Link to="/cart" className="btn btn-primary btn-sm w-full rounded-2xl">
                      Ver carrito
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Usuario (placeholder) */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring-2 ring-base-300">
                  <img
                    alt="User avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 w-52 rounded-3xl bg-base-100 border border-base-300 p-2 shadow-sm"
              >
                <li><a>Perfil</a></li>
                <li><a>Configuración</a></li>
                <li><a>Salir</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Barra secundaria (mobile/tablet) */}
        <div className="lg:hidden pb-3">
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <SearchBar />
            </div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-outline btn-sm rounded-2xl">
                Menú
              </label>
              <ul tabIndex={0} className="menu dropdown-content mt-3 w-56 rounded-3xl bg-base-100 border border-base-300 p-2 shadow-sm">
                <li>
                  <button
                    onMouseEnter={() => setIsMenuOpen(true)}
                    onClick={() => setIsMenuOpen((v) => !v)}
                  >
                    Categorías
                  </button>
                </li>
                <li><Link to="/products">Productos</Link></li>
                <li><a>Marcas</a></li>
                <li><a>Ofertas</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
import { useCart } from "../store/cart.store";

function Navbar() {
  const { getTotalItems, getTotalPrice } = useCart();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="container flex h-full items-center justify-between m-auto">
        <div className="flex flex-row gap-8">
          <Link to={"/"} className=" text-xl font-bold">
            Mi Tienda
          </Link>
          <ul className="flex items-center gap-6">
            <li>
              <Link to={"/products"}>Productos</Link>
            </li>
            <li>
              <Link to={"/categories"}>Categorías</Link>
            </li>
          </ul>
        </div>
        
        <div className="flex flex-row gap-4">
          <input type="text" placeholder="Buscar" className="input input-bordered w-70" />
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
                <span className="badge badge-sm indicator-item">
                  {totalItems}
                </span>
              </div>
            </div>
            
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{totalItems || 'Sin '} {totalItems===1 ? 'Item' : 'Items' }</span>
                <span className="text-info">Subtotal: ${totalPrice}</span>
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
    </div>
  );
}

export default Navbar;

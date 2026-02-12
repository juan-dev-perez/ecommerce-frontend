import { Facebook, Instagram, Store, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-3">
        <aside className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Store className="text-primary" />
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">TecnoFix</div>
              <div className="text-xs text-base-content/60">Ecommerce tech</div>
            </div>
          </div>
          <p className="text-sm text-base-content/70">
            Proyecto portfolio + tienda real. Catálogo, filtros, carrito y UX moderna.
          </p>
        </aside>

        <div className="text-sm">
          <div className="font-semibold mb-2">Secciones</div>
          <div className="flex flex-col gap-1 text-base-content/70">
            <a className="link link-hover">Productos</a>
            <a className="link link-hover">Ofertas</a>
            <a className="link link-hover">Marcas</a>
          </div>
        </div>

        <nav className="text-sm">
          <div className="font-semibold mb-2">Seguinos</div>
          <div className="flex items-center gap-3">
            <a className="btn btn-ghost btn-sm btn-circle" href="#" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a className="btn btn-ghost btn-sm btn-circle" href="#" aria-label="YouTube">
              <Youtube size={18} />
            </a>
            <a className="btn btn-ghost btn-sm btn-circle" href="#" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a className="btn btn-ghost btn-sm btn-circle" href="#" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>

          <div className="mt-6 text-xs text-base-content/60">
            © {new Date().getFullYear()} TecnoFix — All rights reserved
          </div>
        </nav>
      </div>
    </footer>
  );
}

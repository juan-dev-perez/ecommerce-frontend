import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="rounded-3xl bg-base-100 border border-base-300 overflow-hidden">
      <div className="grid gap-8 lg:grid-cols-2 items-center p-6 md:p-10">
        <div>
          <div className="badge badge-outline">Nuevo</div>

          <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight leading-tight">
            Tecnología para tu setup,{" "}
            <span className="text-primary">rápida y sin vueltas</span>.
          </h1>

          <p className="mt-3 text-base text-base-content/70 max-w-prose">
            Componentes, periféricos y productos tech con filtros, ofertas y un
            carrito simple. Un ecommerce pensado como producto real.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link to="/products" className="btn btn-primary rounded-2xl">
              Ver productos
            </Link>
            <Link to="/products" className="btn btn-outline rounded-2xl">
              Ver ofertas
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-base-content/70">
            <div className="rounded-2xl bg-base-200 border border-base-300 p-3">
              <div className="font-semibold text-base-content">Envíos</div>
              <div>Seguimiento</div>
            </div>
            <div className="rounded-2xl bg-base-200 border border-base-300 p-3">
              <div className="font-semibold text-base-content">Pagos</div>
              <div>Flexibles</div>
            </div>
            <div className="rounded-2xl bg-base-200 border border-base-300 p-3">
              <div className="font-semibold text-base-content">Soporte</div>
              <div>Atención</div>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary/15 via-base-200 to-secondary/10 border border-base-300" />
          <div className="absolute -bottom-5 -left-5 w-44 h-44 rounded-3xl bg-base-100 border border-base-300 shadow-sm hidden md:block" />
          <div className="absolute top-6 right-6 w-28 h-28 rounded-3xl bg-base-100 border border-base-300 shadow-sm hidden md:block" />
        </div>
      </div>
    </section>
  );
}

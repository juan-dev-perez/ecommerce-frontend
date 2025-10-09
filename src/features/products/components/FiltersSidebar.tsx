import { useFilterStore } from "../../../store/filter.store";
import { useCategories } from "../hooks/useCategories";

export default function FiltersSidebar() {
    
  // const { category, setCategory } = useFilterStore((state) => ({
  //   category: state.category,
  //   setCategory: state.setCategory,
  // }));

  const { categories, isLoading, isError } = useCategories();

  // 3. Manejador para cuando el usuario selecciona una categoría
  const handleCategoryClick = (categoryId: string | null) => {
    // Actualizamos el estado global de filtros
    // setCategory(categoryId);
  };

  if (isLoading) return <div>Cargando categorías...</div>;
  if (isError) return <div>Error al cargar categorías</div>;

  return (
    <aside>
      <h2>Categorías</h2>
      <nav>
        <ul>
          {/* Opción para limpiar el filtro de categoría */}
          <li>
            <button
              onClick={() => handleCategoryClick(null)}
              // style={{ fontWeight: category === null ? "bold" : "normal" }}
            >
              Todas
            </button>
          </li>

          {/* Listamos las categorías obtenidas */}
          {categories?.map((cat) => (
            <li key={cat.id}>
              <button
                // onClick={() => handleCategoryClick(cat.id)}
                // style={{ fontWeight: category === cat.id ? "bold" : "normal" }}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Aquí podríamos añadir más filtros en el futuro (precio, etc.) */}
    </aside>
  );
}

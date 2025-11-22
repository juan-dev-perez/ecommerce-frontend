// src/components/layout/MegaMenu.tsx
import { useState } from "react";
import { Link } from "react-router-dom"; // Asumiendo que usas React Router
import { useCategoryTree } from "../../features/products/hooks/useCategoryTree";
import type { CategoryNode } from "../../features/products/utils/category-tree";
import { ChevronRight } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const { categoryTree, isLoading } = useCategoryTree();

  const [activeRootCategory, setActiveRootCategory] =
    useState<CategoryNode | null>(null);

  if (!isOpen) {
    return null;
  }

  const handleLinkClick = () => {
    onClose();
    setActiveRootCategory(null);
  };

  return (
    <div
      className="absolute top-full left-0 right-0 w-full bg-white shadow-lg border-t border-gray-200 z-50"
      onMouseLeave={() => {
        setActiveRootCategory(null);
        onClose();
      }}
    >
      <div className="container mx-auto p-6">
        {isLoading ? (
          <div>Cargando...</div>
        ) : (
          <div className="grid grid-cols-12 gap-8">
            {/* Columna 1: Categorías Raíz */}
            <div className="col-span-2">
              <h3 className="font-bold text-gray-500 uppercase text-sm mb-4">
                Categorías
              </h3>
              <ul>
                {categoryTree.map((rootCat) => (
                  <li key={rootCat.id}>
                    <Link
                      to={`/categoria/${rootCat.slug}`}
                      onMouseEnter={() => setActiveRootCategory(rootCat)}
                      onClick={() => handleLinkClick()}
                      className="w-full text-left p-2 rounded-md hover:bg-gray-100 flex justify-between items-center"
                    >
                      <span
                        className={
                          rootCat === activeRootCategory ? "text-blue-600" : ""
                        }
                      >
                        {rootCat.name}
                      </span>
                      {/* icono */}
                      <ChevronRight size={18} className="text-gray-400" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Columna 2: Subcategorías*/}
            <div className="col-span-10">
              {activeRootCategory ? (
                <div>
                  <Link
                    to={`/categoria/${activeRootCategory.slug}`}
                    className="font-bold text-blue-600 uppercase text-sm"
                  >
                    {activeRootCategory.name}
                  </Link>
                  {/* Organizamos las subcategorías en columnas para un look más limpio */}
                  <div className="grid grid-cols-5 gap-4 mt-4">
                    {activeRootCategory.children.map((level2Cat) => (
                      <div key={level2Cat.id}>
                        <Link
                          to={`/categoria/${level2Cat.slug}`}
                          onClick={handleLinkClick}
                          className="font-semibold text-gray-800 hover:text-blue-600 block mb-2"
                        >
                          {level2Cat.name}
                        </Link>
                        {/* Lista de sub-subcategorías (nivel 3) */}
                        <ul>
                          {level2Cat.children.map((level3Cat) => (
                            <li key={level3Cat.id}>
                              <Link
                                to={`/categoria/${level3Cat.slug}`}
                                onClick={handleLinkClick}
                                className="text-sm text-gray-600 hover:text-blue-600 block py-1"
                              >
                                {level3Cat.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                // Mensaje por defecto cuando no hay ninguna categoría activa
                <div className="flex items-center justify-center h-full text-gray-400">
                  <p>Pasa el cursor sobre una categoría para ver más.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

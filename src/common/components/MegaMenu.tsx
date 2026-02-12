import { useState } from "react";
import { Link } from "react-router-dom";
import { useCategoryTree } from "../../features/products/hooks/useCategoryTree";
import type { CategoryNode } from "../../features/products/utils/category-tree";
import { ChevronRight } from "lucide-react";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const { categoryTree, isLoading } = useCategoryTree();
  const [activeRootCategory, setActiveRootCategory] = useState<CategoryNode | null>(null);

  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
    setActiveRootCategory(null);
  };

  return (
    <div
      className="absolute top-full left-0 right-0 w-full z-50"
      onMouseLeave={() => {
        setActiveRootCategory(null);
        onClose();
      }}
    >
      <div className="mt-2 rounded-3xl bg-base-100 border border-base-300 shadow-sm">
        <div className="mx-auto w-full max-w-6xl px-4 py-6">
          {isLoading ? (
            <div className="text-sm text-base-content/70">Cargando categorías…</div>
          ) : (
            <div className="grid grid-cols-12 gap-6">
              {/* Root */}
              <div className="col-span-12 md:col-span-3">
                <div className="text-xs font-semibold text-base-content/60 uppercase mb-3">
                  Categorías
                </div>
                <ul className="space-y-1">
                  {categoryTree.map((rootCat) => {
                    const isActive = rootCat === activeRootCategory;
                    return (
                      <li key={rootCat.id}>
                        <Link
                          to={`/categoria/${rootCat.slug}`}
                          onMouseEnter={() => setActiveRootCategory(rootCat)}
                          onClick={handleLinkClick}
                          className={`flex items-center justify-between rounded-2xl px-3 py-2 hover:bg-base-200 transition ${
                            isActive ? "bg-base-200 text-primary" : ""
                          }`}
                        >
                          <span className="font-medium">{rootCat.name}</span>
                          <ChevronRight size={18} className="text-base-content/40" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Children */}
              <div className="col-span-12 md:col-span-9">
                {activeRootCategory ? (
                  <div>
                    <Link
                      to={`/categoria/${activeRootCategory.slug}`}
                      className="text-xs font-semibold text-primary uppercase"
                      onClick={handleLinkClick}
                    >
                      {activeRootCategory.name}
                    </Link>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                      {activeRootCategory.children.map((level2Cat) => (
                        <div key={level2Cat.id} className="space-y-2">
                          <Link
                            to={`/categoria/${level2Cat.slug}`}
                            onClick={handleLinkClick}
                            className="font-semibold link link-hover"
                          >
                            {level2Cat.name}
                          </Link>

                          <ul className="space-y-1">
                            {level2Cat.children.map((level3Cat) => (
                              <li key={level3Cat.id}>
                                <Link
                                  to={`/categoria/${level3Cat.slug}`}
                                  onClick={handleLinkClick}
                                  className="text-sm text-base-content/70 hover:text-primary"
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
                  <div className="flex items-center justify-center h-full text-sm text-base-content/60">
                    Pasá el cursor sobre una categoría para ver más.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

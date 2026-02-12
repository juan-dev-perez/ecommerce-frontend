import { useState } from "react";
import type { CategoryNode as CategoryNodeType } from "../utils/category-tree";
import { ChevronRight } from "lucide-react";

export interface CategoryNodeProps {
  node: CategoryNodeType;
  onCategorySelect: (categorySlug: string) => void;
  activeCategorySlug: string | null;
}

export default function CategoryNode({
  node,
  onCategorySelect,
  activeCategorySlug,
}: CategoryNodeProps) {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = node.children && node.children.length > 0;
  const isActive = activeCategorySlug === node.slug;

  const handleNodeClick = () => {
    onCategorySelect(node.slug);
    // opcional: si querés que al seleccionar una categoría con hijos se abra
    if (hasChildren) setIsOpen(true);
  };

  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((v) => !v);
  };

  return (
    <li>
      <div className="flex items-center gap-1">
        {hasChildren ? (
          <button
            onClick={handleToggleClick}
            className="btn btn-ghost btn-xs btn-circle"
            aria-label={isOpen ? "Contraer" : "Expandir"}
          >
            <ChevronRight
              size={16}
              className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
            />
          </button>
        ) : (
          <span className="w-8" />
        )}

        <button
          onClick={handleNodeClick}
          className={`flex-1 text-left rounded-2xl px-3 py-2 text-sm transition ${
            isActive
              ? "bg-base-200 text-primary font-semibold"
              : "hover:bg-base-200"
          }`}
          title={node.name}
        >
          {node.name}
        </button>
      </div>

      {isOpen && hasChildren && (
        <ul className="mt-2 ml-4 pl-3 border-l border-base-300 space-y-1">
          {node.children.map((childNode) => (
            <CategoryNode
              key={childNode.id}
              node={childNode}
              onCategorySelect={onCategorySelect}
              activeCategorySlug={activeCategorySlug}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

import { useState } from "react";
import type { CategoryNode as CategoryNodeType } from "../utils/category-tree";

export interface CategoryNodeProps {
  node: CategoryNodeType;
  onCategorySelect: (categorySlug: string) => void;
  activeCategorySlug: string | null;
}

export default function CategoryNode({ node, onCategorySelect, activeCategorySlug }: CategoryNodeProps) {
  // Estado local para saber si este nodo está expandido o no
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = node.children && node.children.length > 0;
  const isActive = activeCategorySlug === node.slug;

  // Manejador para el clic en el nombre de la categoría
  const handleNodeClick = () => {
    onCategorySelect(node.slug);
  };

  // Manejador para el clic en el icono de expandir/colapsar
  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que el clic también seleccione la categoría
    setIsOpen(!isOpen);
  };

  return (
    <li className="my-1">
      <div className="flex items-center">
        {/* Icono para expandir/colapsar, solo si hay hijos */}
        {hasChildren ? (
          <button onClick={handleToggleClick} className="p-1 rounded-full hover:bg-gray-200">
            {/* Cambia el icono dependiendo del estado 'isOpen' */}
            <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        ) : (
          // Espaciador para alinear los textos si no hay hijos
          <span className="w-6"></span>
        )}

        {/* Botón con el nombre de la categoría */}
        <button
          onClick={handleNodeClick}
          className={`text-left flex-grow px-2 py-1 rounded-md text-sm ${
            isActive ? 'bg-blue-100 text-blue-800 font-semibold' : 'hover:bg-gray-100'
          }`}
        >
          {node.name}
        </button>
      </div>

      {/* Renderizado Recursivo: Si el nodo está abierto y tiene hijos, renderiza una nueva lista de nodos hijos */}
      {isOpen && hasChildren && (
        <ul className="pl-6 border-l border-gray-200 ml-3">
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
};

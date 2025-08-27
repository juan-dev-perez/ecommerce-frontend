import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  stock: number;
};

type CartState = {
  items: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">, cantidad: number) => void;
  updateProductQuantityCart: (
    productId: number,
    productQuantity: number
  ) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (product, cantidad = 1) => {
        const existing = get().items.find((item) => item.id === product.id);

        if (existing) {
          set({
            items: get().items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + cantidad }
                : item
            ),
          });
        } else {
          set({
            items: [...get().items, { ...product, quantity: cantidad }],
          });
        }
      },

      updateProductQuantityCart: (productId, productQuantity) => {
        const existing = get().items.find((item) => item.id === productId);
        if (!existing) return;

        set({
          items: get().items.map((item) =>
            item.id === productId
              ? { ...item, quantity: productQuantity }
              : item
          ),
        });
      },

      removeFromCart: (productId) => {
        set({
          items: get().items.filter((item) => item.id !== productId),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      getTotalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
    }),
    {
      name: "cart-storage",
    }
  )
);

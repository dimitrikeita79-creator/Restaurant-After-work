import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartLine = {
  id: string;
  name: string;
  image: string;
  qty: number;
};

type CartState = {
  lines: CartLine[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  add: (line: Omit<CartLine, "qty">) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      isOpen: false,
      open: () => set({ isOpen: true }),
      close: () => set({ isOpen: false }),
      toggle: () => set((s) => ({ isOpen: !s.isOpen })),
      add: (line) =>
        set((s) => {
          const existing = s.lines.find((l) => l.id === line.id);
          if (existing) {
            return {
              lines: s.lines.map((l) => (l.id === line.id ? { ...l, qty: l.qty + 1 } : l)),
              isOpen: true,
            };
          }
          return { lines: [...s.lines, { ...line, qty: 1 }], isOpen: true };
        }),
      remove: (id) => set((s) => ({ lines: s.lines.filter((l) => l.id !== id) })),
      setQty: (id, qty) =>
        set((s) => ({
          lines:
            qty <= 0
              ? s.lines.filter((l) => l.id !== id)
              : s.lines.map((l) => (l.id === id ? { ...l, qty } : l)),
        })),
      clear: () => set({ lines: [] }),
      count: () => get().lines.reduce((s, l) => s + l.qty, 0),
    }),
    { name: "after-work-cart" },
  ),
);


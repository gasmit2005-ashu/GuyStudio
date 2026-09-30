import { createContext, useContext, useMemo, useReducer } from "react";
import { products } from "./content.js";

const CartContext = createContext(null);

function key(id, size) {
  return `${id}__${size}`;
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD": {
      const k = key(action.id, action.size);
      const qty = (state.items[k]?.qty || 0) + (action.qty || 1);
      return { ...state, items: { ...state.items, [k]: { id: action.id, size: action.size, qty } }, lastAdded: action.id };
    }
    case "SET_QTY": {
      const k = key(action.id, action.size);
      if (action.qty <= 0) {
        const items = { ...state.items };
        delete items[k];
        return { ...state, items };
      }
      return { ...state, items: { ...state.items, [k]: { id: action.id, size: action.size, qty: action.qty } } };
    }
    case "REMOVE": {
      const items = { ...state.items };
      delete items[key(action.id, action.size)];
      return { ...state, items };
    }
    case "TOGGLE_WISHLIST": {
      const wishlist = new Set(state.wishlist);
      wishlist.has(action.id) ? wishlist.delete(action.id) : wishlist.add(action.id);
      return { ...state, wishlist };
    }
    case "OPEN_BAG":
      return { ...state, bagOpen: true };
    case "CLOSE_BAG":
      return { ...state, bagOpen: false };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: {}, wishlist: new Set(), bagOpen: false, lastAdded: null });

  const lines = useMemo(
    () =>
      Object.values(state.items).map((it) => ({
        ...it,
        product: products.find((p) => p.id === it.id),
      })),
    [state.items]
  );
  const count = lines.reduce((n, l) => n + l.qty, 0);
  const subtotal = lines.reduce((n, l) => n + l.qty * (l.product?.price || 0), 0);

  const value = {
    lines,
    count,
    subtotal,
    bagOpen: state.bagOpen,
    wishlist: state.wishlist,
    addItem: (id, size, qty = 1) => dispatch({ type: "ADD", id, size, qty }),
    setQty: (id, size, qty) => dispatch({ type: "SET_QTY", id, size, qty }),
    removeItem: (id, size) => dispatch({ type: "REMOVE", id, size }),
    toggleWishlist: (id) => dispatch({ type: "TOGGLE_WISHLIST", id }),
    openBag: () => dispatch({ type: "OPEN_BAG" }),
    closeBag: () => dispatch({ type: "CLOSE_BAG" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

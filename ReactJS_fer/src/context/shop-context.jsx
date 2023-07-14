import { createContext, useState, useEffect } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  // const [cartItems, setCartItems] = useState(getDefaultCart());

  const [cartItems, setCartItems] = useState(() => {
    // Khôi phục giá trị từ localStorage hoặc trả về giá trị mặc định
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
    return storedCartItems || getDefaultCart();
  });

  useEffect(() => {
    // Lưu trữ cartItems vào localStorage khi giá trị thay đổi
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item];
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    // alert("Add Voucher Successfully!");
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
  };
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    setCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

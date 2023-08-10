import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

let allHashtags = [];

export const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  return (
    <UserContext.Provider
      value={{
        cart,
        setCart
      }}
    >
  
      {children}
    </UserContext.Provider>
  );
};

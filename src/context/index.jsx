import React, { useContext, useState } from "react";

const counterContext = React.createContext();
export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
};

export const useCount = () => {
  const context = useContext(counterContext);
  const { count, setCount } = context;
  return { count, setCount };
};

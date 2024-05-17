import { useState } from "react";
import { useContext, createContext } from "react";

const CounterContext = createContext(null);

export const useCounterContext = () => useContext(CounterContext);

export default function CounterContextProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
}

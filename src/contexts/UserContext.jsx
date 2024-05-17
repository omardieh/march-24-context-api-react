import { useContext, createContext, useState } from "react";

const UserContext = createContext(null);
export const useUserContext = () => useContext(UserContext);

export default function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
}

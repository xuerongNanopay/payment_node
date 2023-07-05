import { useContext } from "react";

import { AuthContext } from "contexts/JWTContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  console.log('aaa', context)

  if (!context)
    throw new Error("AuthContext must be placed within AuthProvider");

  return context;
};

export default useAuth;

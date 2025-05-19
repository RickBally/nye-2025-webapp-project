import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Types for the user and context
type User = {
  id: string;
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  token: string | null;
  register: (user: string, email: string, password: string, passwordC: string, FName:string, LName: string) => Promise<void>;
};

// 1. Create the Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 2. Create the Provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);


  const register = async (userName: string, email: string, password: string, passwordC: string, firstName:string, lastName:string) => {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName, email, password, passwordC, firstName, lastName }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || 'Sikertelen regisztráció.');


    setToken(data.token);
    setUser(data.user);
  };

  return (
    // Wrap children in AuthContext.Provider
    <AuthContext.Provider value={{ user, token, register }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Create a custom hook to access the context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
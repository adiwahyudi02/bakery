import { User } from "@/types/user";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import useLocalStorage from "@/hooks/useLocalstorage";

interface LoginContextType {
  user?: User;
  login: (data: User) => void;
}

interface LoginProviderPropsType {
  children: ReactNode;
}

const useLoginValue = (): LoginContextType => {
  const router = useRouter();
  const [user, setUser] = useLocalStorage<string>("user", "{}");
  const userData = JSON.parse(user);

  const login = (data: User) => {
    setUser(JSON.stringify(data));

    router.push("/");
  };

  // check authetication
  useEffect(() => {
    if (Object.keys(userData).length === 0) {
      router.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user: userData,
    login,
  };
};

const LoginContext = createContext<LoginContextType>(null!);

const LoginProvider = ({ children }: LoginProviderPropsType) => {
  const value = useLoginValue();

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

const useLoginCtx = () => {
  const context = useContext(LoginContext);
  if (context === undefined) {
    throw new Error("useLoginCtx must be used within a LoginProvider");
  }

  return context;
};

export { LoginProvider, useLoginCtx };

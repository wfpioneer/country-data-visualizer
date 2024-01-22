import React, { useState } from "react";
import { Cache } from "../types";

interface CacheValue {
  cache: Cache;
  setCache: React.Dispatch<React.SetStateAction<Cache>>;
}

export const CacheContext = React.createContext<CacheValue>({
  cache: {},
  setCache: () => {},
});

interface ICacheProviderProps {
  children?: React.ReactNode;
}

export const CacheProvider: React.FC<ICacheProviderProps> = ({ children }) => {
  const [cache, setCache] = useState<Cache>({});

  return (
    <CacheContext.Provider value={{ cache, setCache }}>
      {children}
    </CacheContext.Provider>
  );
};

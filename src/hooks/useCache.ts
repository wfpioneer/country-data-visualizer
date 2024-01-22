import { useCallback, useContext } from "react";
import { Country, CountryCode } from "../types";
import { CacheContext } from "../context/CacheContext";

export const useCache = () => {
  const { cache, setCache } = useContext(CacheContext);

  const getItem = (key: CountryCode): Country | undefined => {
    return cache[key];
  };

  const saveItem = useCallback((key: CountryCode, value: Country) => {
    setCache((prevCache) => ({ ...prevCache, [key]: value }));
  }, [setCache]);

  const clearItem = useCallback((key: CountryCode) => {
    setCache((prevCache) => {
      const { [key]: _, ...rest } = prevCache;
      return rest;
    });
  }, [setCache]);

  const clearCache = useCallback(() => {
    setCache({});
  }, [setCache]);

  return { cache, getItem, saveItem, clearItem, clearCache };
};

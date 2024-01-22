import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { useCache } from "./useCache";
import { useRemoteData } from "./useRemoteData";
import { Country, CountryCode } from "../types";

export const useCountryData = () => {
  const [code, setCode] = useState<CountryCode>("");

  const { data, error, loading, fetchData } = useRemoteData();
  const { getItem, saveItem, clearItem, clearCache } = useCache();

  const cachedData: Country | undefined = getItem(code);

  const changeCode = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  }, []);

  const update = useCallback(() => {
    fetchData(code.toUpperCase());
  }, [code, fetchData]);

  const clear = useCallback(() => {
    clearItem(code);
  }, [code, clearItem]);

  useEffect(() => {
    if (data && data.country) saveItem(data.country.code, data.country);
  }, [data, saveItem]);

  return {
    code,
    data: cachedData,
    error,
    loading,
    changeCode,
    update,
    clear,
    clearAll: clearCache,
  };
};

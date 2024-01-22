import { renderHook } from "@testing-library/react";
import { CacheProvider } from "../context/CacheContext";
import { useCache } from "../hooks/useCache";
import { Country } from "../types";
import { act } from "react-dom/test-utils";
import { MOCK_COUNTRY } from "../mock/country";

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <CacheProvider>{children}</CacheProvider>
);

describe("useCache hook", () => {
  it("should save, get, clear item in the cache", () => {
    const { result } = renderHook(() => useCache(), { wrapper });

    act(() => {
      const country: Country = MOCK_COUNTRY;

      result.current.saveItem("US", country);
    });

    const savedCountry = result.current.getItem("US");
    expect(savedCountry).toEqual(expect.anything());

    act(() => {
      result.current.clearItem("US");
    });

    const afterClear = result.current.getItem("US");
    expect(afterClear).toBeUndefined();
  });

  it("should clear the entire cache", () => {
    const { result } = renderHook(() => useCache(), { wrapper });

    act(() => {
      const country1: Country = MOCK_COUNTRY;

      const country2: Country = MOCK_COUNTRY;

      result.current.saveItem("US", country1);
      result.current.saveItem("CA", country2);
    });

    expect(result.current.getItem("US")).toEqual(expect.anything());
    expect(result.current.getItem("CA")).toEqual(expect.anything());

    act(() => {
      result.current.clearCache();
    });

    expect(result.current.getItem("US")).toBeUndefined();
    expect(result.current.getItem("CA")).toBeUndefined();
  });
});

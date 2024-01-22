import { useCountryData } from "./useCountryData";
import { useCache } from "./useCache";
import { useRemoteData } from "./useRemoteData";

// Make sure to install this library for mocking useRef behavior
// npm install jest-mock-extended --save-dev
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";

jest.mock("./useCache");
jest.mock("./useRemoteData");

test("should use country data", () => {
  const mockCache = {
    getItem: jest.fn(),
    saveItem: jest.fn(),
    clearItem: jest.fn(),
    clearCache: jest.fn(),
  };

  const mockRemoteData = {
    data: null,
    error: null,
    loading: false,
    fetchData: jest.fn(),
  };

  (useCache as jest.Mock).mockReturnValue(mockCache);
  (useRemoteData as jest.Mock).mockReturnValue(mockRemoteData);

  const { result } = renderHook(() => useCountryData());

  expect(result.current.code).toBe("");
  expect(result.current.data).toBeUndefined();
  expect(result.current.error).toBe(null);
  expect(result.current.loading).toBe(false);

  act(() => {
    result.current.changeCode({
      target: { value: "US" },
    } as React.ChangeEvent<HTMLInputElement>);
  });

  expect(result.current.code).toBe("US");

  act(() => {
    result.current.update();
  });

  expect(mockRemoteData.fetchData).toHaveBeenCalledWith("US");

  act(() => {
    result.current.clear();
  });

  expect(mockCache.clearItem).toHaveBeenCalledWith("US");

  act(() => {
    result.current.clearAll();
  });

  expect(mockCache.clearCache).toHaveBeenCalled();

  expect(mockCache.saveItem).not.toHaveBeenCalled();
});

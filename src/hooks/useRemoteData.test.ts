import { QueryResult, useLazyQuery } from "@apollo/client";
import { useRemoteData } from "./useRemoteData";
import { renderHook } from "@testing-library/react";

jest.mock("@apollo/client");

describe("useRemoteData", () => {
  it("should call fetch function", async () => {
    const mockFetch = jest.fn();
    (useLazyQuery as jest.MockedFunction<typeof useLazyQuery>).mockReturnValue([
      mockFetch,
      { loading: false, error: undefined, data: null } as any as QueryResult<
        any,
        any
      >,
    ]);

    const { result } = renderHook(() => useRemoteData());

    expect(mockFetch).not.toHaveBeenCalled();

    result.current.fetchData("US");

    expect(mockFetch).toHaveBeenCalledWith({
      variables: { code: "US" },
      fetchPolicy: "no-cache",
    });
  });
});

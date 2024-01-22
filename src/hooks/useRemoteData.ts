import { CountryCode, GraphQLResponse } from "../types";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRY_BY_CODE } from "../query";
import { useCallback } from "react";

export const useRemoteData = () => {
  const [fetch, { loading, error, data }] = useLazyQuery(GET_COUNTRY_BY_CODE);

  const fetchData = useCallback(
    (code: CountryCode) => {
      fetch({ variables: { code }, fetchPolicy: "no-cache" });
    },
    [fetch]
  );

  return { data: data as GraphQLResponse, error, loading, fetchData };
};

import { gql } from "@apollo/client";

export const GET_COUNTRY_BY_CODE = gql`
  query getCountryByCode($code: ID!) {
    country(code: $code) {
      awsRegion
      capital
      code
      continent {
        name
        code
      }
      currencies
      languages {
        code
        name
        native
        rtl
      }
      name
      phones
      states {
        code
        name
      }
    }
  }
`
import { ApolloError } from "@apollo/client";
import { Country } from "../../types";
import { Empty, Flex, Spin } from "antd";
import { Error } from "./Error";
import { CountryDescription } from "./CountryDescription";

interface ICountryDataProps {
  data: Country | undefined;
  error: ApolloError | undefined;
  loading: boolean;
  update: () => void;
}

export const CountryData: React.FC<ICountryDataProps> = ({
  error,
  loading,
  data,
  update,
}) => {
  return (
    <Spin tip={`Loading country data...`} spinning={loading}>
      <Flex align="center" justify="center" style={{ margin: "16px 0px" }}>
        {error && <Error update={update} />}
        {!error && !data && <Empty />}
        {!error && data && <CountryDescription data={data} />}
      </Flex>
    </Spin>
  );
};

import { useMemo } from "react";
import { Country } from "../../types";
import { Descriptions, DescriptionsProps, Tag } from "antd";

interface ICountryDescriptionProps {
  data: Country;
}

export const CountryDescription: React.FC<ICountryDescriptionProps> = ({
  data,
}) => {
  const items: DescriptionsProps["items"] = useMemo(
    () =>
      data
        ? [
            {
              key: "capital",
              label: "Capital",
              children: data.capital,
            },
            {
              key: "code",
              label: "Country Code",
              children: data.code,
            },
            {
              key: "continent",
              label: "Continent",
              children: data.continent.name,
            },
            {
              key: "awsRegion",
              label: "AWS Region",
              children: data.awsRegion,
            },
            {
              key: "currencies",
              label: "Currencies",
              span: 2,
              children: (
                <>
                  {data.currencies.map((cur) => (
                    <Tag key={cur} color="cyan">
                      {cur}
                    </Tag>
                  ))}
                </>
              ),
            },
            {
              key: "languages",
              label: "Languages",
              span: 3,
              children: (
                <>
                  {data.languages.map((lang) => (
                    <Tag key={lang.code} color="magenta">
                      {lang.name} ({lang.native})
                    </Tag>
                  ))}
                </>
              ),
            },
            {
              key: "states",
              label: "States",
              span: 3,
              children: (
                <>
                  {data.states.map((state) => (
                    <Tag key={state.code} color="purple">
                      {state.name}
                    </Tag>
                  ))}
                </>
              ),
            },
          ]
        : [],
    [data]
  );

  return (
    <Descriptions title={data.name} bordered layout="vertical" items={items} />
  );
};

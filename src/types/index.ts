export type Continent = {
  code: string;
  name: string;
};

export type Language = {
  code: string;
  name: string;
  native: string;
  rtl: boolean;
};

export type State = {
  code: string;
  name: string;
};

export type Country = {
  awsRegion: string;
  capital: string;
  code: string;
  continent: Continent;
  currencies: string[];
  languages: Language[];
  name: string;
  phones: string[];
  states: State[];
};

export type CountryCode = string;

export type Cache = {
  [key: CountryCode]: Country;
};

export type GraphQLResponse = {
  country: Country | null;
};

export interface AppInterface {
  'name': string;
  'topLevelDomain': string[];
  'alpha2Code': string;
  'alpha3Code': string;
  'callingCodes': string[];
  'capital': string;
  'region': string;
  'subregion': string;
  'population': number;
  'area': number;
  'gini'?: number;
  'borders'?: string[];
  'nativeName'?: string;
  'numericCode'?: string;
  'currencies': object[];
  'languages': object[];
  'translations'?: object;
  'flag': string;
  'regionalBlocs'?: object[];
}

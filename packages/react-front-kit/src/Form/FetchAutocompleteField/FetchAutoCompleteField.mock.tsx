/* eslint-disable @typescript-eslint/naming-convention */
import type {
  IFetchAutocompleteFieldProps,
  IFetchOption,
} from './FetchAutocompleteField';

export interface IOpenStreetMapData {
  display_name: string;
}

export interface IAdressGouvData {
  properties: { label: string };
}

export const fetchOptionsMock: IFetchOption[] = [
  { key: 'format', value: 'jsonv2' },
  { key: 'addressdetails', value: '1' },
  { key: 'countrycodes', value: 'fr' },
  { key: 'accept-language', value: 'fr' },
  { key: 'limit', value: '10' },
];

export const fetchOpenStreetMapMock: IFetchAutocompleteFieldProps<
  IOpenStreetMapData,
  IOpenStreetMapData[]
> = {
  baseUrl: 'https://nominatim.openstreetmap.org/search.php',
  fetchDataLabelKey: 'display_name',
  fetchOthersOptions: fetchOptionsMock,
  transformResultsFunction: (data) => {
    const result = data.map((element) => {
      return { label: element.display_name, value: element };
    });
    const resultWithoutDuplicate = result.map((item) => {
      const { label } = item;
      return result.filter((element) => {
        return element.label === label;
      })[0];
    });
    return resultWithoutDuplicate;
  },
};

export const fetchAdressDataGouvMock: IFetchAutocompleteFieldProps<
  IAdressGouvData,
  { features: IAdressGouvData[] }
> = {
  baseUrl: 'https://api-adresse.data.gouv.fr/search/',
  fetchDataLabelKey: 'label',
  fetchOthersOptions: [
    { key: 'type', value: '' },
    { key: 'autocomplete', value: '1' },
  ],
  transformResultsFunction: (data: { features: IAdressGouvData[] }) => {
    const result = data.features.map((element) => {
      return { label: element.properties.label, value: element };
    });
    const resultWithoutDuplicate = result.map((item) => {
      const { label } = item;
      return result.filter((element) => {
        return element.label === label;
      })[0];
    });
    return resultWithoutDuplicate;
  },
};

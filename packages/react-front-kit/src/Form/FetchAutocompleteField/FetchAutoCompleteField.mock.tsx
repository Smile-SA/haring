import type {
  IFetchAutocompleteFieldProps,
  IFetchOption,
  IValue,
} from './FetchAutocompleteField';

export const fetchOptionsMock: IFetchOption[] = [
  { key: 'format', value: 'jsonv2' },
  { key: 'addressdetails', value: '1' },
  { key: 'countrycodes', value: 'fr' },
  { key: 'accept-language', value: 'fr' },
  { key: 'limit', value: '10' },
];

export const fetchOpenStreetMapMock: IFetchAutocompleteFieldProps = {
  baseUrl: 'https://nominatim.openstreetmap.org/search.php',
  fetchDataLabelKey: 'display_name',
  fetchOthersOptions: fetchOptionsMock,
  transformResultsFunction: (data) => {
    const result: IValue[] = data.map((element: { display_name: string }) => {
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

export const fetchAdressDataGouvMock: IFetchAutocompleteFieldProps = {
  baseUrl: 'https://api-adresse.data.gouv.fr/search/',
  fetchDataLabelKey: 'label',
  fetchOthersOptions: [
    { key: 'type', value: '' },
    { key: 'autocomplete', value: '1' },
  ],
  transformResultsFunction: (data) => {
    const result: IValue[] = data.features.map(
      (element: { properties: { label: string } }) => {
        return { label: element.properties.label, value: element };
      },
    );
    const resultWithoutDuplicate = result.map((item) => {
      const { label } = item;
      return result.filter((element) => {
        return element.label === label;
      })[0];
    });
    return resultWithoutDuplicate;
  },
};

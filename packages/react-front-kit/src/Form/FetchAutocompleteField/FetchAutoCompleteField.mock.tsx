import type {
  IFetchAutocompleteFieldProps,
  IFetchOption,
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
};

export const fetchAdressDataGouvMock: IFetchAutocompleteFieldProps = {
  baseUrl: 'https://api-adresse.data.gouv.fr/search/',
  fetchDataLabelKey: 'label',
  fetchOthersOptions: [
    { key: 'type', value: '' },
    { key: 'autocomplete', value: '1' },
  ],
};

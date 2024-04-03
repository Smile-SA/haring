/* eslint-disable @typescript-eslint/naming-convention */
import type { IFetchOption } from './FetchAutocompleteField';

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

export async function getDataOpenStreetMapMock(
  value: string,
): Promise<unknown> {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search.php?q=${encodeURIComponent(
      value,
    )}&format=jsonv2&addressdetails=1&countrycodes=fr&accept-language=fr&limit=10`,
  );
  const data: IOpenStreetMapData[] = await response.json();
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
}

export async function getDataAddressGouvMock(value: string): Promise<unknown> {
  const response = await fetch(
    `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(
      value,
    )}&autocomplete=1`,
  );
  const data: { features: IAdressGouvData[] } = await response.json();
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
}

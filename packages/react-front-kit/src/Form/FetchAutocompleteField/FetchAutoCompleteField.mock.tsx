import type { IValue } from './FetchAutocompleteField';

/* eslint-disable @typescript-eslint/naming-convention */
export interface IOpenStreetMapData {
  display_name: string;
}

export interface IAddressGouvData {
  properties: {
    city?: string;
    housenumber?: string;
    label: string;
    number?: string;
    postcode?: string;
    street?: string;
  };
}

export async function getDataOpenStreetMapMock(
  value: string,
): Promise<IValue<IOpenStreetMapData>[]> {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search.php?q=${encodeURIComponent(
      value,
    )}&format=jsonv2&addressdetails=1&countrycodes=fr&accept-language=fr&limit=10&dedupe=1`,
  );
  const data: IOpenStreetMapData[] = await response.json();
  const result: IValue<IOpenStreetMapData>[] = data.map((element) => {
    return { label: element.display_name, value: element };
  });

  return result;
}

export async function getDataAddressGouvMock(
  value: string,
): Promise<IValue<IAddressGouvData>[]> {
  const response = await fetch(
    `https://api-Adresse.data.gouv.fr/search/?q=${encodeURIComponent(
      value,
    )}&autocomplete=1`,
  );
  const data: { features: IAddressGouvData[] } = await response.json();
  const result = data.features.map((element) => {
    return { label: element.properties.label, value: element };
  });

  return result;
}

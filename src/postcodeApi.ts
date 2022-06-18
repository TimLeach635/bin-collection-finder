interface Postcode {
  postcode: string;
  longitude: number;
  latitude: number;
}

interface PostcodeApiResponse<T> {
  status: number;
  result: T;
}

interface Geocode {
  longitude: number;
  latitude: number;
  radius?: number;
  limit?: number;
}

interface BulkReverseGeocodeRequest {
  geolocations: Array<Geocode>;
}

interface ReverseGeocodeResult {
  query: Geocode;
  result: Array<Postcode>;
}

export const lookupPostcode = async (
  postcode: string
): Promise<PostcodeApiResponse<Postcode>> => {
  const postcodeLookupResponse = await fetch(
    `https://api.postcodes.io/postcodes/${postcode}`
  );
  const postcodeLookup = await postcodeLookupResponse.json();
  return postcodeLookup;
};

export const bulkReverseGeocode = async (
  geocodes: Array<Geocode>
): Promise<PostcodeApiResponse<Array<ReverseGeocodeResult>>> => {
  const requestBody: BulkReverseGeocodeRequest = {
    geolocations: geocodes,
  };

  const geocodeLookupResponse = await fetch(
    `https://api.postcodes.io/postcodes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    }
  );
  const geocodeLookup = await geocodeLookupResponse.json();

  return geocodeLookup;
};

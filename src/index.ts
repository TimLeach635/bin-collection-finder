import { lookupPostcode, bulkReverseGeocode } from "./postcodeApi";

const myPostcode = "CB42QR";

// const getAddressesInPostcode = async (postcode) => {
//   const response = await fetch(
//     `https://servicelayer3c.azure-api.net/wastecalendar/address/search?postCode=${postcode}`
//   );
//   return await response.json();
// };

// const getCollectionsForAddress = async (addressId) => {
//   const response = await fetch(
//     `https://servicelayer3c.azure-api.net/wastecalendar/collection/search/${addressId}/?numberOfCollections=12`
//   );
//   return await response.json();
// };

// getNearestPostcodes(myPostcode, 10000, 10000).then(async (postcodes) => {
//   const addressListPromises = postcodes.map(getAddressesInPostcode);
//   const addressLists = await Promise.all(addressListPromises);
//   const addressIds = addressLists
//     .map((addressList) => addressList[0].id)
//     .filter((id) => id !== "-1");
//   const collectionListPromises = addressIds.map(getCollectionsForAddress);
//   const collectionLists = await Promise.all(collectionListPromises);
//   const nextCollections = collectionLists
//     .map((collectionList) => collectionList.collections[0])
//     .filter((collection) => collection);
//   console.log(nextCollections);
// });



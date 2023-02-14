import camelize from "camelize";
import { locations } from "./location.mock";

// this will take the searchTerm and will request for that particular location with the google servers
export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm]; // currently using mock data
    if (!locationMock) {
      return reject("No location");
    } else {
      return resolve(locationMock);
    }
  });
};
export const locationTransform = (result) => {
  const formattedResult = camelize(result);
  const { geometry = {} } = formattedResult.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};

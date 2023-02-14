import { mocks, mockImages } from "./restaurants/mock";
import camelize from "camelize";
export const RestaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    console.log(location);
    const mock = mocks[location];

    if (!mock) {
      return reject("No mock found");
    } else {
      return resolve(mock);
    }
  });
};
// here taking the result
export const transformResult = ({ results = [] }) => {
  const mappedResult = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      address: restaurant.vicinity,

      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResult);
};

import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";

import { RestaurantsRequest, transformResult } from "./restaurants.services";
import { LocationContext } from "./location/location.context";
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      RestaurantsRequest(loc)
        .then(transformResult)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(error);
        });
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationStr = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationStr);
    }
  }, [location]);
  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

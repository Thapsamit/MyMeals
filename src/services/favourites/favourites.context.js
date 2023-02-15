import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = (value, uid) => {
    const jsonValue = JSON.stringify(value);
    AsyncStorage.setItem(`@favourites-${uid}`, jsonValue)
      .then(() => console.log("Item stored successfully"))
      .catch((error) => console.error("Error storing item", error));
  };
  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value != null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };
  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavourites(newFavourites);
  };

  // TO LOAD THE FAVOURITES FIRST TIME WHEN COMPONENT LOADS
  useEffect(() => {
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  // WHEN FAVOURITES CHANGES LIKE ADDING AND REMOVING FAVOURITES
  useEffect(() => {
    if (user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);
  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

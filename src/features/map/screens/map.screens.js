import React, { useContext, useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants.context";
import { MapCallout } from "../components/map-callout.component";
import { Search } from "../components/search.component";
const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;
  console.log("from map viewport = ", viewport);
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const latDelta = northeastLat - southwestLat;

    setLatDelta(latDelta);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: restaurant,
                  })
                }
              >
                <MapCallout isMap={true} restaurant={restaurant}></MapCallout>
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

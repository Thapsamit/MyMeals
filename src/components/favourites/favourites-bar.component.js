import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { View } from "react-native";
import { MapCallout } from "../../features/map/components/map-callout.component";
import { Spacer } from "../spacer/spacer.component";
const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouriteBar = ({ favourites, onNavigate }) => {
  return (
    <FavouritesWrapper>
      <Text>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <View key={key} style={{ marginLeft: 5 }}>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    console.log("from favourite bar");
                    onNavigate("RestaurantDetail", { restaurant: restaurant });
                  }}
                >
                  <MapCallout restaurant={restaurant} />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

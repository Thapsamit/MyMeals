import React, { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../utils/safe-area.component";
import { FlatList, Pressable } from "react-native";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <FlatList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }} // give padding to the card against boundaries of screen
      />
    </SafeArea>
  ) : (
    <SafeArea>
      <Text center>No Favourites yet</Text>
    </SafeArea>
  );
};

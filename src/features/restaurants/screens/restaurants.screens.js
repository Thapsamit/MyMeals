import React, { useContext, useState } from "react";
import { RestaurantsContext } from "../../../services/restaurants.context";
import { StyleSheet, StatusBar, SafeAreaView, FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import styled from "styled-components/native";
import { Loader } from "../../../components/loader/loader";
import { Search } from "../components/search.component";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { FavouriteBar } from "../../../components/favourites/favourites-bar.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight &&
  `margin-top: ${StatusBar.currentHeight}px;`}// as statusBar.currentHeight not supported in IOS
`;

const ListContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const [isToggled, setIsToggled] = useState(false);
  const { favourites } = useContext(FavouritesContext);
  return (
    <SafeArea>
      <Search
        isFavouritesToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouriteBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <FlatList
          data={restaurants}
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
      )}
    </SafeArea>
  );
};

const styles = StyleSheet.create();

import React, { useState } from "react";
import { List } from "react-native-paper";
import { SafeArea } from "../../../utils/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { ScrollView } from "react-native";
export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Omelete" />
          <List.Item title="Breads" />
          <List.Item title="Fries" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Dal & Rice" />
          <List.Item title="Mushroom soup" />
          <List.Item title="Burger & Fries" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Red Velvet Cake" />
          <List.Item title="Spring rolls" />
          <List.Item title="Fish" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Wine" />
          <List.Item title="Fruit Juice" />
          <List.Item title="Soft Drink" />
          <List.Item title="Wine" />
          <List.Item title="Fruit Juice" />
          <List.Item title="Soft Drink" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

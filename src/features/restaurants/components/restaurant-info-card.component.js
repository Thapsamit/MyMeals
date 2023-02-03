import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

/*  STYLED COMPONENTS */
// can also style like this, to style card
//can't use styled.Card as it is an external library
const RestaurantCard = styled(Card)`
  background-color: white;
`;

// to style cover
const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 10px;
  resizemode: contain;
`;
const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Restaurant Name",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1658273116011-97c78348cb0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1902&q=80",
    ],
    address = "Faridabad,Haryana",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily,
  } = restaurant; // getting data from props
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
const styles = StyleSheet.create();

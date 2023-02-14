import React from "react";
import { StyleSheet, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Info,
  RestaurantCard,
  RestaurantCardCover,
  Row,
  MainRow,
  MainRowEnd,
} from "./restaurant-info-card.styles";
import { Favourite } from "../../../components/favourites/favourite.component";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [],
    address = "Faridabad,Haryana",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily = restaurant.isClosedTemporarily,
  } = restaurant; // getting data from props
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover
        key={name}
        source={{
          uri: photos[0],
        }}
      />
      <Info>
        <Text variant="label">{name}</Text>
        <MainRow>
          <Row>
            {ratingArray.map((ele, idx) => (
              <SvgXml xml={star} width={20} height={20} key={idx} />
            ))}
          </Row>
          <MainRowEnd>
            {isCloseTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer variant="left.large" />
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            <Spacer variant="left.large" />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </MainRowEnd>
        </MainRow>
        <Text>{address}</Text>
      </Info>
    </RestaurantCard>
  );
};
const styles = StyleSheet.create();

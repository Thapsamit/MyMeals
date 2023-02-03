import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

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
// const Title = styled.Text`
//   font-size: ${(props) => props.theme.fontSizes.body};
//   font-family: ${(props) => props.theme.fonts.heading};
//   color: ${(props) => props.theme.colors.ui.primary}; ;
// `;

const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const MainRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const MainRowEnd = styled.View`
  flex-direction: row;
`;
const Row = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
/*
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
*/
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Restaurant Name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1658273116011-97c78348cb0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1902&q=80",
    ],
    address = "Faridabad,Haryana",
    isOpenNow = true,
    rating = 4,
    isCloseTemporarily = true,
  } = restaurant; // getting data from props
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
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

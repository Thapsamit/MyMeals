import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const RestaurantCard = styled(Card)`
  background-color: white;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

/*  STYLED COMPONENTS */
// can also style like this, to style card
//can't use styled.Card as it is an external library
// to style cover
export const RestaurantCardCover = styled(Card.Cover)`
  background-color: white;
  padding: 10px;
`;

export const MainRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const MainRowEnd = styled.View`
  flex-direction: row;
`;
export const Row = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

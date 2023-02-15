import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AnimationWrapper = styled.View`
  position: absolute;
  top: 30px;
  width: 100%;
  height: 40%;
`;

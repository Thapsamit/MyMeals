import React from "react";
import {
  AccountBackground,
  AccountCover,
  AnimationWrapper,
} from "../components/account.styles";
import { Button } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from "lottie-react-native";
export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AnimationWrapper>
        <LottieView
          source={require("../../../../assets/food.json")}
          autoPlay
          loop
        />
      </AnimationWrapper>

      <Button
        icon="lock"
        mode="contained"
        onPress={() => navigation.navigate("Login")}
      >
        Login
      </Button>
      <Spacer variant="top.large" />
      <Button
        icon="lock-open-outline"
        mode="contained"
        onPress={() => navigation.navigate("Register")}
      >
        Register
      </Button>
    </AccountBackground>
  );
};

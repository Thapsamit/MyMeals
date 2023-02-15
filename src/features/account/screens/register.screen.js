import React, { useState, useContext } from "react";
import { AccountBackground, AccountCover } from "../components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { TextInput, Button } from "react-native-paper";
import { Text } from "react-native";
import { colors } from "../../../infrastructure/theme/colors";

export const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <TextInput
        style={{ width: 300 }}
        label="E-mail"
        value={email}
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(u) => setEmail(u)}
      />
      <Spacer variant="top.large" />
      <TextInput
        style={{ width: 300 }}
        label="Password"
        value={password}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        secure
        onChangeText={(p) => setPassword(p)}
      />
      <Spacer variant="top.large" />
      <TextInput
        style={{ width: 300 }}
        label="Repeat Password"
        value={repeatedPassword}
        textContentType="password"
        secureTextEntry
        autoCapitalize="none"
        secure
        onChangeText={(p) => setRepeatedPassword(p)}
      />
      <Spacer variant="top.large" />
      <Text style={{ color: colors.ui.error }}>{error}</Text>
      <Spacer variant="top.large" />
      <Button
        icon="lock-open-outline"
        mode="contained"
        onPress={() => onRegister(email, password, repeatedPassword)}
      >
        Register
      </Button>
    </AccountBackground>
  );
};

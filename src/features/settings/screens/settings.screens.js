import React, { useContext, useState, useEffect } from "react";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { SafeArea } from "../../../utils/safe-area.component";
import { List, Avatar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import styled from "styled-components/native";
import { TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "../../../components/typography/text.component";
const AvatarContainer = styled.View`
  align-items: center;
`;
export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePic = async (user) => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
    await setPhoto(photoUri);
    console.log("from photo posting", photo);
  };
  useEffect(() => {
    getProfilePic(user);
  }, [user]);

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" />
          ) : (
            <Avatar.Image
              size={180}
              source={{
                uri: photo,
              }}
            />
          )}
        </TouchableOpacity>

        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <List.Item
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};

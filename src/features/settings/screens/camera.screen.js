import React, { useRef, useState, useEffect, useContext } from "react";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;
export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const { user } = useContext(AuthenticationContext);
  const cameraRef = useRef();
  const snap = async () => {
    console.log("test");
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();

      AsyncStorage.setItem(`${user.uid}-photo`, JSON.stringify(photo.uri))
        .then(() => {
          console.log("profile taken successfully");
          navigation.navigate("Settings");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  return (
    <>
      <ProfileCamera
        ratio={"16:9"}
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      >
        <View
          style={{
            justifyContent: "flex-end",
            alignItems: "center",
            flex: 1,
            marginBottom: 20,
          }}
        >
          <TouchableOpacity
            onPress={snap}
            style={{
              backgroundColor: "white",
              width: 80,
              height: 80,
              borderRadius: 100,
            }}
          />
        </View>
      </ProfileCamera>
    </>
  );
};

import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Feed from "../screens/Feed/index";

import userProfile from "../../assets/userProfile.png";
import perfil from "../../assets/perfil-marlon.jpg";

const MainNavigator = createStackNavigator(
  {
    Feed
  },
  {
    defaultNavigationOptions: {
      headerTitle: () => (
        <Text style={{ color: "#ffb41c", fontWeight: "bold", fontSize: 20 }}>
          SABE OFERTAS
        </Text>
      ),
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Image
            source={perfil}
            style={{
              width: 40,
              height: 40,
              resizeMode: "cover",
              borderRadius: 20,
              borderColor: "#ffb41c",
              borderWidth: 1
            }}
          />
        </TouchableOpacity>
      )
    }
  }
);

export default createAppContainer(MainNavigator);

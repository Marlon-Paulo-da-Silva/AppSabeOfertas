import React from "react";
import { StatusBar, StyleSheet, Text, SafeAreaView } from "react-native";

import Feed from "./src/screens/Feed/index.js";
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
      <Routes />
    </>
  );
}

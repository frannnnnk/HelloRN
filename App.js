/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { StackNavigator } from "react-navigation";

import HomeComponent from "./home";
import WangyiNews from "./news";
import MultiTabDemo from "./tabdemo";

const App = StackNavigator({
  Home: { screen: HomeComponent },
  WangyiNews: { screen: WangyiNews },
  MultiTabDemo : {screen: MultiTabDemo }
});

AppRegistry.registerComponent("HelloRN", () => App);

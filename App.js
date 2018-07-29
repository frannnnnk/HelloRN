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

const App = StackNavigator({
  Home: { screen: HomeComponent },
  WangyiNews: { screen: WangyiNews }
});

AppRegistry.registerComponent("HelloRN", () => App);

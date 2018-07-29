import React, { Component } from "react";
import { Platform, StyleSheet, View, Text, TextInput } from "react-native";
import CategoryComponent from "./category";
import SearchComponent from "./search-box";
import ImageLoopComponent from "./adverts";
import AwkwardScrollingImageWithText from "./imagetext";

export default class HomeComponent extends Component {
  static navigationOptions = {
    title: "首页"
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={homeStyles.flex}>
        <ImageLoopComponent
          images={[
            "http://weitu-650-water.bj.bcebos.com/233108491856.jpg@!water",
            "http://weitu-650-water.bj.bcebos.com/233112809441.jpg@!water",
            "http://weitu-650-water.bj.bcebos.com/233173071073.jpg@!water"
          ]}
        />
        <SearchComponent
          searchAction={queryKey => {
            alert(`搜索词是 ${queryKey}`);
          }}
        />
        <CategoryComponent navigation={this.props.navigation} />
        <AwkwardScrollingImageWithText />
      </View>
    );
  }
}

const homeStyles = StyleSheet.create({
  flex: {
    flex: 1,
    flexDirection: "column"
  }
});

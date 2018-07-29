import React, { Component } from "react";
import { Platform, StyleSheet, View, Text, TextInput } from "react-native";
import CategoryComponent from "./category";
import SearchComponent from "./search-box";

export default class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={homeStyles.flex}>
        <SearchComponent
          searchAction={queryKey => {
            alert(`搜索词是 ${queryKey}`);
          }}
        />
        <CategoryComponent navigation={this.props.navigation} />
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

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image
} from "react-native";
import TabNavigator from "react-native-tab-navigator";

export default class MultiTabDemo extends Component {
  static navigationOptions = {
    title: "多TAB切换DEMO"
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home"
    };
  }

  render() {
    return (
      <TabNavigator tabBarStyle={{height:55}}>
        <TabNavigator.Item
          selected={this.state.selectedTab === "home"}
          title="Home"
          renderIcon={() => (
            <Image style={styles.img} source={require("./tab1.png")} />
          )}
          renderSelectedIcon={() => (
            <Image style={styles.img} source={require("./tab1.png")} />
          )}
          badgeText="1"
          onPress={() => this.setState({ selectedTab: "home" })}
        >
          <Text style={styles.text}>美团</Text>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === "profile"}
          title="Profile"
          renderIcon={() => (
            <Image style={styles.img} source={require("./tab2.png")} />
          )}
          renderSelectedIcon={() => (
            <Image style={styles.img} source={require("./tab2.png")} />
          )}
          onPress={() => this.setState({ selectedTab: "profile" })}
          badgeText="99"
        >
          <Text style={styles.text}>点评</Text>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }
}

const styles = {
  flex: {
    flex: 1,
    flexDirection: "row"
  },
  text: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#FF0067",
    alignItems: "center"
  },
  img: {
    width: 32,
    height: 32
  }
};

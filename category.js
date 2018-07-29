import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, PixelRatio } from "react-native";

export default class CategoryComponent extends Component {
  static navigationOptions = {
    title: "吱吱"
  };

  constructor(props) {
    super(props);
    this.state = { WangyiNewsCode: 1 };
  }

  render() {
    const { navigate } = this.props.navigation;
    const self = this;
    return (
      <View>
        <View style={styles.container}>
          <View style={[styles.item, styles.center]}>
            <Text
              onPress={() => {
                navigate("WangyiNews", {
                  user: "Lucy",
                  getCode: function(code) {
                    self.setState({ WangyiNewsCode: code });
                  }
                });
              }}
              style={styles.font}
            >
              网易新闻{this.state.WangyiNewsCode}
            </Text>
          </View>
          <View style={[styles.item, styles.lineLeftAndRight]}>
            <View style={[styles.item2, styles.center, styles.lineCenter]}>
              <Text style={styles.font}>海外酒店</Text>
            </View>
            <View style={[styles.item2, styles.center]}>
              <Text style={styles.font}>特惠酒店</Text>
            </View>
          </View>
          <View style={[styles.item]}>
            <View style={[styles.item2, styles.center, styles.lineCenter]}>
              <Text style={styles.font}>团购</Text>
            </View>
            <View style={[styles.item2, styles.center]}>
              <Text style={styles.font}>客栈</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  container: {
    justifyContent: "flex-start",
    backgroundColor: "#FF0067",
    flexDirection: "row",
    borderRadius: 5,
    padding: 2,
    margin: 10
  },
  item: {
    flex: 1,
    height: 80
  },
  item2: {
    flex: 1
  },
  font: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  lineLeftAndRight: {
    borderLeftWidth: 2 / PixelRatio.get(),
    borderRightWidth: 2 / PixelRatio.get(),
    borderColor: "#FFFFFF"
  },
  lineCenter: {
    borderBottomWidth: 2 / PixelRatio.get(),
    borderColor: "#FFFFFF"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  }
});

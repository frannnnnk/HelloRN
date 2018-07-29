import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
  PixelRatio,
  TouchableHighlight
} from "react-native";

export default class SearchComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryText: "",
      showHint: false
    };
  }

  handleSearchButtonClicked() {
    if (this.props.searchAction && this.state.queryText) {
      this.props.searchAction(this.state.queryText);
    }
  }

  handleTextChanged(text) {
    if (text.length == 0) {
      this.setState({
        queryText: text,
        showHint: false
      });
    } else {
      this.setState({
        queryText: text,
        showHint: true
      });
    }
  }

  handleHintWordSelected(text) {
    this.setState({
      queryText: text,
      showHint: false
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.input}>
            <TextInput
              keywordType="search"
              underlineColorAndroid="transparent"
              value={this.state.queryText}
              onChangeText={this.handleTextChanged.bind(this)}
            />
          </View>
          <View style={styles.btn}>
            <Text onPress={this.handleSearchButtonClicked.bind(this)}>
              搜索
            </Text>
          </View>
        </View>
        {this.state.showHint ? (
          <View style={styles.hintContainer}>
            <TouchableHighlight
              onPress={this.handleHintWordSelected.bind(
                this,
                "美团" + this.state.queryText
              )}
              underlayColor="#ea66a6"
            >
              <Text numberOfLines={1} style={styles.hintText}>
                美团{this.state.queryText}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handleHintWordSelected.bind(
                this,
                "点评" + this.state.queryText
              )}
              underlayColor="#ea66a6"
            >
              <Text numberOfLines={1} style={styles.hintText}>
                点评{this.state.queryText}
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handleHintWordSelected.bind(
                this,
                "支付宝" + this.state.queryText
              )}
              underlayColor="#ea66a6"
            >
              <Text numberOfLines={1} style={styles.hintText}>
                支付宝{this.state.queryText}
              </Text>
            </TouchableHighlight>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column"
  },
  searchContainer: {
    flexDirection: "row",
    margin: 5,
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#999d9c",
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  input: {
    flex: 3,
    height: 45,
    justifyContent: "flex-end",
    paddingLeft: 10,
    paddingRight: 10
  },
  btn: {
    flex: 1,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#009ad6"
  },
  btnFont: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center"
  },
  hintContainer: {
    paddingLeft: 12,
    paddingRight: 12
  },
  hintText: {
    fontSize: 20,
    color: "black"
  }
});

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
  Dimensions
} from "react-native";

class ImageLoopComponent extends Component {
  constructor(props) {
    super(props);

    var timer = null;
    this.state = {
      imageIndex: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      var nextIndex = (this.state.imageIndex + 1) % this.props.images.length;
      this.setState({ imageIndex: nextIndex });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{ uri: this.props.images[this.state.imageIndex] }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    width: Dimensions.get("window").width,
    height: 150
  }
});

module.exports = ImageLoopComponent;

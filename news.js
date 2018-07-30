import React, { Component } from "react";
import { StyleSheet, Text, View, PixelRatio, ListView } from "react-native";

/**
 * 头部
 */
class NewsHeader extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.font, styles.font1]}>网易</Text>
        <Text style={[styles.font, styles.font2]}>新闻</Text>
        <Text style={[styles.font]}>有态度"</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2 / PixelRatio.get(),
    borderBottomColor: "#EF2D36"
  },
  font: {
    fontSize: 25,
    fontWeight: "bold"
  },
  font1: {
    color: "#CD1D1C"
  },
  font2: {
    color: "#FFF",
    backgroundColor: "#CD1D1C"
  }
});

/**
 * 新闻列表
 */
class NewsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cHeight: 0,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
    var hasGetHeight = false;
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this.props.news)
    });
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          style={listStyle.listView}
          contentContainerStyle={listStyle.container}
          onContentSizeChange={this._onContentSizeChange}
        />
      </View>
    );
  }

  _renderRow(rowData, sectionId, rowId) {
    return (
      <View style={listStyle.listItem}>
        <Text style={listStyle.listItemText}>{rowData}</Text>
      </View>
    );
  }
}

const listStyle = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  listView: {
    backgroundColor: "#F5FCFF"
  },
  listItem: {
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  listItemText: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

/**
 * 重要新闻
 */
class ImportantNews extends Component {
  show(title) {
    alert(title);
  }

  render() {
    var news = [];
    for (var i in this.props.news) {
      var t = (
        <Text
          onPress={this.show.bind(this, this.props.news[i])}
          numberOfLines={1}
          style={importNewsStyle.newsItem}
          key={i}
        >
          {this.props.news[i]}
        </Text>
      );
      news.push(t);
    }
    return (
      <View>
        <Text style={importNewsStyle.title}>今日要闻</Text>
        {news}
      </View>
    );
  }
}

const importNewsStyle = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#CD1D1C",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15
  },
  newsItem: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 15,
    lineHeight: 40
  }
});

/**
 * 新闻主页面
 */
class WangyiNews extends Component {
  static navigationOptions = {
    title: "网易新闻"
  };

  componentDidMount() {
    this.setState({ Name: this.props.navigation.state.params.user });
  }

  handleTitleClicked() {
    const getCode = this.props.navigation.state.params.getCode;
    if (getCode) {
      getCode(100);
    }
    this.props.navigation.goBack();
  }

  render() {
    const params = this.props.navigation.state.params;

    return (
      <View style={newsStyle.flex}>
        <NewsHeader />
        <NewsList
          news={[
            "习近平在“黄金之城”的十个金句",
            "习主席到访的这个国家，中国春节是法定假日",
            "中国外交部：金砖国家发出反对单边主义信号",
            "风雨中彰显责任担当——来自全国抗洪防汛的报道",
            "重磅!深圳小产权房要转正?产办类需补缴50%地价",
            `${params.user}给你发来了一封私信...`
          ]}
        />

        <ImportantNews
          news={[
            "百名红通人员张勇光回国投案:涉受贿,2010年外逃至美国百名红通人员张勇光回国投案:涉受贿,2010年外逃至美国",
            "直击浙江桐庐桥顶垮塌:事发时风雨交加,大量瓦片吹落",
            "越南台企获准挂“青天白日满地红旗”,台商这样感叹",
            "日美空军战机在日本海上空联合训练"
          ]}
        />

        <Text
          onPress={this.handleTitleClicked.bind(this)}
          style={{ height: 40, fontSize: 20, marginLeft: 10 }}
        >
          快点我吧!
        </Text>
      </View>
    );
  }
}

const newsStyle = StyleSheet.create({
  flex: {
    flex: 1
  }
});

module.exports = WangyiNews;

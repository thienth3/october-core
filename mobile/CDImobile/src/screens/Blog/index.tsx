import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Header } from "../../components";
import styles from "./styles";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

class Blog extends Component<Props, {}> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header title="Blog" leftButtonPress={() => navigation.openDrawer()} />
        <ScrollView contentContainerStyle={styles.contentStyle}>
          <Text style={styles.textStyle}>Blog Page</Text>
        </ScrollView>
      </View>
    );
  }
}

export default Blog;

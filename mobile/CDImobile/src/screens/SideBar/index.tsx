import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { colors } from "../../constants";
import { ListItem } from "../../components/ListItem";
// import { logoutUserService } from "../../../redux/services/user";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

class SideBar extends Component<Props, {}> {
  
  handleLogout = () => {
    const { navigation } = this.props;
    // logoutUserService().then(() => {
      navigation.navigate("AuthStack");
    // });
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ListItem title="Home" onPress={() => navigation.navigate("Home")} />
        <ListItem title="Blank Page" onPress={() => navigation.navigate("Blank")} />
        <ListItem title="Forum Page" onPress={() => navigation.navigate("Forum")} />
        <ListItem title="Blog Page" onPress={() => navigation.navigate("Blog")} />
        <ListItem title="Survey List Page" onPress={() => navigation.navigate("SurveyList")} />
        <ListItem title="Log Out" onPress={() => this.handleLogout()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.containerBg
  }
});

export default SideBar;

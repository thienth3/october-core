import React from "react";
import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

// import Home from "../screens/";
// import Blank from "../screens/AppScreens/Blank";
// import Forum from "../screens/AppScreens/Forum";
// import SurveyList from "../screens/AppScreens/SurveyList";
// import Survey from "../screens/AppScreens/SurveyList/Survey";
import Blog from "../screens/Blog";
// import Profile from "../screens/AppScreens/Profile";
import SideBar from "../screens/SideBar";
import Login from "../screens/screenAuth/Login";
import Register from "../screens/screenAuth/Register";
import AuthLoading from "../screens/screenLoading/AuthLoading";

const MainStack = createStackNavigator(
  {
    // Home: { screen: Home },
    Blog: { screen: Blog }
    // Profile : { screen: Profile}
  },
  {
    initialRouteName: "Blog",
    headerMode: "none"
  }
);

const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);
// const SurveyForm = createStackNavigator(
//   {
//     SurveyList: { screen: SurveyList },
//     Survey : { screen: Survey}
//   },
//   {
//     initialRouteName: "SurveyList",
//     headerMode: "none"
//   }
// );

const AppStack = createDrawerNavigator(
  {
    MainStack: { screen: MainStack },
    // Blank: { screen: Blank },
    // Forum: { screen: Forum },
    // SurveyForm: { screen: SurveyForm },
    Blog: { screen: Blog }
  },
  {
    drawerWidth: width - 50,
    drawerPosition: "left",
    contentComponent: (props: any) => <SideBar {...props} />
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      AuthStack: AuthStack,
      AppStack: AppStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

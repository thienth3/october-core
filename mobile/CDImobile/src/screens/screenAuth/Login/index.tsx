import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
  AsyncStorage,
  ClippingRectangle,
  Alert
} from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/SimpleLineIcons";
// import { loginUserService } from "../../../redux/services/user";
import { Input, ButtonComponent } from "../../../components";
import styles from "./styles";
import { connect } from 'react-redux';
import { actionLogin } from "../../../redux-saga/actions/loginAction";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  handleLogin: Function;
  loginReducer: any;
}
interface userData {
  username: string;
  password: string;
}

const loginSchema = Yup.object().shape({
  username: Yup.string()
    .matches(/^[a-zA-Z0-9_-]+$/)
    .min(4)
    .max(16)
    .required(),
  password: Yup.string()
    .matches(/^[a-zA-Z]+(\s?[a-zA-z]+)*$/)
    .min(6)
    .max(16)
    .required()
});

class Login extends Component<Props, {}> {
  handleSignIn = (values: userData) => {
    const { navigation, handleLogin, loginReducer } = this.props;
    handleLogin(values);
    console.log('==============loginReducer=>  ', JSON.stringify(loginReducer) );
    // let token = AsyncStorage.getItem('token');
    
    if ( loginReducer.isLoading == false && loginReducer.name != '' ) {
      navigation.navigate("AppStack");
    } else {
      Alert.alert("Notification", "Login Failed !!!");
    }  
  };

  render() {
    const { navigation} = this.props;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView bounces={false}>
            <Formik
              initialValues={{ username: "", password: "" }}
              // validationSchema={loginSchema}
              onSubmit={(values : any) => {
                this.handleSignIn(values)
              }}
            >
              {(props : any) => {
                console.log(props, "fdsfsdfdsf");
                return (
                  <View>
                    <View style={styles.headStyle}>
                      <Icon name="social-youtube" size={100} />
                      <Text style={styles.headText}>
                        Welcome to CDI
                      </Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <Input
                        placeholder="Username"
                        value={props.values.username}
                        onChangeText={props.handleChange("username")}
                        onBlur={props.handleBlur("username")}
                        error={props.touched.username && props.errors.username}
                      />
                      <Input
                        placeholder="Password"
                        value={props.values.password}
                        onChangeText={props.handleChange("password")}
                        onBlur={props.handleBlur("password")}
                        secureTextEntry
                        error={props.touched.password && props.errors.password}
                      />
                      <ButtonComponent text="Login" onPress={props.handleSubmit} />
                    </View>
                      {/* <Button text="Register" onPress={() => navigation.navigate("Register")} /> */}
                      
                  </View>
                );
              }}
            </Formik>
          </ScrollView>
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.signupLink} onPress={() => navigation.navigate("Register") }>
          <Text style={styles.linkText}> Don't have an account? Signup </Text>        
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    loginReducer: state.loginReducer
  };
};
const mapDispatchToProps = (dispatch: any) => { 
    return {
      handleLogin: (values: userData) => dispatch(actionLogin(values)),
      
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  AsyncStorage,
  ClippingRectangle,
  // Button
} from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/SimpleLineIcons";
// import { loginUserService } from "../../../redux/services/user";
import { Input, 
  ButtonComponent
 } from "../../../components";
import styles from "./styles";
import { connect } from 'react-redux';
import { actionLogin } from "../../../redux-saga/actions/loginAction";

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  handleLogin: Function;
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
    const { navigation, handleLogin } = this.props;
    handleLogin(values);
    // loginUserService(values.username, values.password).then(res => {
    let token = AsyncStorage.getItem('token');
    //   console.log('===============>  ', token);
    if(token != null) navigation.navigate("AppStack");
    // });
  };

  render() {
    // const { navigation, handleLogin} = this.props;
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView bounces={false}>
            <Formik
              initialValues={{ username: "", password: "" }}
              // validationSchema={loginSchema}
              onSubmit={values => this.handleSignIn(values)}
            >
              {props => {
                console.log(props, "fdsfsdfdsf");
                return (
                  <View>
                    <View style={styles.headStyle}>
                      <Icon name="emotsmile" size={100} />
                      <Text style={styles.headText}>
                        Build Something Amazing
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
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log(state);
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
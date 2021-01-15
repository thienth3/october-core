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
  // Button
} from "react-native";
import { NavigationScreenProp, NavigationState } from "react-navigation";
import { Formik } from "formik";
import * as Yup from "yup";
import Icon from "react-native-vector-icons/SimpleLineIcons";
// import { loginUserService } from "../../../redux/services/user";
import { Input, ButtonComponent, Header } from "../../../components";
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

const registerSchema = Yup.object().shape({
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

class Register extends Component<Props, {}> {
  handleSignUp = (values: userData) => {
    const { navigation, handleLogin, loginReducer } = this.props;
    handleLogin(values);
    console.log('==============loginReducer=>  ', JSON.stringify(loginReducer) );
    
    // loginUserService(values.username, values.password).then(res => {
    // let token = AsyncStorage.getItem('token');
    //   console.log('===============>  ', token);
    
    if(loginReducer.isLoading == false && loginReducer.name != '') {
      navigation.navigate("AppStack");
    }  
    // });
  };

  render() {
    const { navigation} = this.props;
    return (
      <View style={styles.container}>
        <Header title="Register" leftButtonPress={() => navigation.goBack()} iconLeft={"arrow-back-outline"} />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView bounces={false}>
            <Formik
              initialValues={{ fullname: "", username: "", email: "", password: "", phoneNumber: "" }}
              // validationSchema={registerSchema}
              onSubmit={(values : any) => {
                this.handleSignUp(values)
              }}
            >
              {(props : any) => {
                console.log(props, "fdsfsdfdsf");
                return (
                  <View>
                    <View style={styles.headStyle}>
                      <Icon name="user" size={100} />
                      <Text style={styles.headText}>
                        Welcome to CDI
                      </Text>
                    </View>
                    <View style={styles.inputContainer}>
                      <Input
                        placeholder="Full Name"
                        value={props.values.fullname}
                        onChangeText={props.handleChange("fullname")}
                        onBlur={props.handleBlur("fullname")}
                        error={props.touched.fullname && props.errors.fullname}
                      />
                      <Input
                        placeholder="Username"
                        value={props.values.username}
                        onChangeText={props.handleChange("username")}
                        onBlur={props.handleBlur("username")}
                        error={props.touched.username && props.errors.username}
                      />
                      <Input
                        placeholder="Email"
                        value={props.values.email}
                        onChangeText={props.handleChange("email")}
                        onBlur={props.handleBlur("email")}
                        error={props.touched.email && props.errors.email}
                      />
                      <Input
                        placeholder="Phone Number"
                        value={props.values.phoneNumber}
                        onChangeText={props.handleChange("phoneNumber")}
                        onBlur={props.handleBlur("phoneNumber")}
                        error={props.touched.phoneNumber && props.errors.phoneNumber}
                      />
                      <Input
                        placeholder="Password"
                        value={props.values.password}
                        onChangeText={props.handleChange("password")}
                        onBlur={props.handleBlur("password")}
                        secureTextEntry
                        error={props.touched.password && props.errors.password}
                      />
                      <ButtonComponent text="Register" onPress={props.handleSubmit} />
                    </View>
                      
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
  return {
    loginReducer: state.loginReducer
  };
};
const mapDispatchToProps = (dispatch: any) => { 
    return {
      handleLogin: (values: userData) => dispatch(actionLogin(values)),
      
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
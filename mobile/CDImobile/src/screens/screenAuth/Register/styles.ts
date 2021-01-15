import { StyleSheet } from "react-native";
import { colors } from "../../../constants";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.containerBg,
    justifyContent: "center",
    position: 'relative'
  },
  headStyle: {
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    // borderBottomWidth: 1,
    // borderBottomColor: colors.borderColor
  },
  headText: {
    fontSize: 18,
    fontWeight: "700"
  },
  inputContainer: {
    justifyContent: "center",
    padding: 20
  },
  signupLink: {
    flexDirection: "row",
    justifyContent: "center"
  },
  linkText: {
    color: colors.grayColor,
    fontWeight: "700"
  }
});

export default styles;

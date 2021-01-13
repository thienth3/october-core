import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";
import { colors } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";

interface Props extends TouchableOpacityProps {
  title: string;
}

export const ListItem = (props : Props) =>  {
    const { title } = props;
    return (
      <TouchableOpacity {...props} style={styles.itemContainer}>
        <Text style={styles.titleStyle}>{title}</Text>
      </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.containerBg,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "500"
  }
});

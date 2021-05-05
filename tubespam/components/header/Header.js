import React from "react";
import { View, Text } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const CustomHeaderButton = (props) => {
  return <HeaderButton {...props} IconComponent={Ionicons} color={"#F57373"} />;
};

export default CustomHeaderButton;
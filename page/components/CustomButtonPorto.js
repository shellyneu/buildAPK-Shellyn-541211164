import React from "react";
import { Button } from "react-native";

const CustomButton = (props) => {
  return (
    <Button title={props.title} color={props.color} onPress={props.onPress} />
  );
};

export default CustomButton;

import React from "react";
import { TextInput } from "react-native";

const CustomInput = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={props.style}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default CustomInput;

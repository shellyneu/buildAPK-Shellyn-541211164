import React from "react";
import { Button } from "react-native";

const CustomButton = (props) => {
  // const handleLogin = () => {
  //   onPress("Portfolio"); // Assuming you want to navigate to "Portfolio" when the button is pressed.
  // };

  return (
    <Button title={props.title} color={props.color} onPress={props.onPress} />
  );
};

export default CustomButton;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomButton from "./components/CustomButtonLogin";
import CustomInput from "./components/CustomInput";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "shellyneuriska@gmail.com" && password === "12345") {
      navigation.navigate("Portofolio");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>
      <Text style={styles.login}>Login</Text>
      <Text style={styles.desc}>masuk untuk melanjutkan</Text>
      <View style={{ alignItems: "center" }}>
        <CustomInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <CustomInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Text style={styles.forgot}>Lupa Password?</Text>
      </View>
      <View style={{ width: 300, marginLeft: 40 }}>
        <Button
          title="Masuk"
          onPress={() => navigation.navigate("Portofolio")}
        />
        <Text style={styles.text}>atau dengan</Text>
        <CustomButton
          title="Google"
          color={"red"}
          onPress={() => alert("login use google")}
        />
      </View>
      <View style={styles.viewDaftar}>
        <Text style={styles.textDaftar}>Belum punya akun?</Text>
        <TouchableOpacity
          style={{ width: 50 }}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.daftar}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 70,
    height: 70,
    marginLeft: 40,
  },
  login: {
    fontSize: 30,
    fontWeight: "800",
    width: 72,
    marginLeft: 40,
    marginTop: 10,
    marginBottom: 5,
  },
  desc: {
    color: "lightgrey",
    fontSize: 20,
    fontWeight: "400",
    marginLeft: 40,
    marginBottom: 50,
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "lightgrey",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "white",
  },
  forgot: {
    color: "lightgrey",
    width: 100,
    marginTop: 10,
    marginBottom: 60,
    marginLeft: 230,
  },
  text: {
    marginBottom: 15,
    marginTop: 15,
    textAlign: "center",
    color: "lightgrey",
  },
  viewDaftar: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 4,
    marginTop: 15,
  },
  textDaftar: {
    width: 100,
    color: "lightgrey",
  },
  daftar: {
    color: "#5393F7",
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import CustomInput from "./components/CustomInput";
import CustomImage from "./components/CustomImage";
import CustomButton from "./components/CustomButtonPorto";

export default function Portofolio() {
  const [jumlah, setJumlah] = useState(0);

  const handleLike = () => {
    setJumlah(jumlah + 1);
  };

  const handleDislike = () => {
    setJumlah(jumlah - 1);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <CustomImage
            source={require("../assets/profile.jpeg")}
            style={styles.profile}
          />
          <Text style={styles.name}>Shellyn Euriska Putri</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>

          <CustomButton
            title="Contact Me"
            color={"#2c1b16"}
            onPress={() => alert("hello!")}
          />

          <Text style={styles.recent}>My Recent Project</Text>

          <CustomImage
            source={require("../assets/project-1.png")}
            style={styles.project}
          />
          <Text style={styles.projectTitle}>Project 1</Text>
          <Text style={styles.projectDesc}>Description Project 1</Text>

          <CustomImage
            source={require("../assets/project-2.png")}
            style={styles.project}
          />
          <Text style={styles.projectTitle}>Project 2</Text>
          <Text style={styles.projectDesc}>Description Project 2</Text>

          <CustomInput style={styles.input} placeholder="text me" />

          <View style={styles.likes}>
            <CustomButton
              title="Likes"
              color={"#2c1b16"}
              onPress={handleLike}
            />
            <CustomButton
              title="Dislike"
              color={"#2c1b16"}
              onPress={handleDislike}
            />
          </View>
          <Text style={styles.count}>Likes: {jumlah}</Text>

          <View style={styles.footer}>
            <CustomImage
              source={require("../assets/github.png")}
              style={styles.socmed}
            />
            <CustomImage
              source={require("../assets/linkedin.png")}
              style={styles.socmed}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#5d4a3e",
    alignItems: "center",
    justifyContent: "center",
  },
  profile: {
    width: 200,
    height: 200,
    marginTop: 72,
    borderRadius: 15,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 20,
    color: "#2c1b16",
  },
  description: {
    fontSize: 15,
    width: 275,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 25,
    color: "#2c1b16",
  },
  project: {
    height: 250,
    width: 300,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
  },
  projectTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    color: "#2c1b16",
    marginRight: 210,
  },
  projectDesc: {
    fontSize: 15,
    marginTop: 5,
    color: "#2c1b16",
    marginRight: 180,
    marginBottom: 20,
  },
  recent: {
    fontWeight: "bold",
    color: "#2c1b16",
    fontSize: 22,
    paddingTop: 10,
    marginTop: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "#2c1b16",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
    // backgroundColor: "#5d4a3e",
  },
  likes: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  count: {
    fontSize: 15,
    width: 50,
    color: "#2c1b16",
  },
  footer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  socmed: {
    width: 30,
    height: 30,
  },
});

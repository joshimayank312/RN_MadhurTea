// LoginStyle.js
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const inputWidth = width * 0.85 * 0.9;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  teaLeafImage: {
    width: 150,
    height: 150,
  },
  input: {
    width: inputWidth,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    paddingHorizontal: 15,
    color: "black",
  },
  loginButton: {
    backgroundColor: "green",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 15,
    marginTop: 25,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  signupText: {
    color: "black",
    marginTop: 10,
  },
  signupTextLink: {
    fontWeight: "bold",
  },
});

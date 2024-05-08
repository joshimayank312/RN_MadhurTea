import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    alignSelf: "center",
    color: "#008000",
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  pickerContainer: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  picker: {
    width: "100%",
    height: 50,
    color: "black",
    paddingHorizontal: 15,
    marginVertical: 0,
    paddingVertical: 0,
  },
  registerButton: {
    backgroundColor: "green",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 20,
  },
  registerButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

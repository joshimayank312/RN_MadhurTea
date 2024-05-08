import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import styles from "./RegisterStyle";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setPin] = useState("");
  const [aadharNo, setAadharNo] = useState("");

  const handleRegister = () => {
    // Check if all fields are filled
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !age.trim() ||
      !email.trim() ||
      !mobileNumber.trim() ||
      !address.trim() ||
      !city.trim() ||
      !state.trim() ||
      !country.trim() ||
      !pin.trim() ||
      !aadharNo.trim()
    ) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }

    // Validating first, middle, and last name
    const nameRegex = /^[a-zA-Z]+$/;
    if (
      !nameRegex.test(firstName) ||
      !nameRegex.test(middleName) ||
      !nameRegex.test(lastName)
    ) {
      Alert.alert(
        "Error",
        "First, middle, and last name can only contain letters."
      );
      return;
    }

    // Validating age
    const parsedAge = parseInt(age);
    if (isNaN(parsedAge) || parsedAge <= 0 || parsedAge >= 150) {
      Alert.alert("Error", "Please enter a valid age.");
      return;
    }

    // Validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    // Validating mobile number
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
      Alert.alert("Error", "Please enter a valid 10-digit mobile number.");
      return;
    }

    // Validating city, state, country
    const textRegex = /^[a-zA-Z]+$/;
    if (
      !textRegex.test(city) ||
      !textRegex.test(state) ||
      !textRegex.test(country)
    ) {
      Alert.alert(
        "Error",
        "City, state, and country can only contain letters."
      );
      return;
    }

    // Validating Pin
    const pinRegex = /^[0-9]{6}$/;
    if (!pinRegex.test(pin)) {
      Alert.alert("Error", "Please enter a valid pin.");
      return;
    }
    // Validating Aadhar card number
    const aadharRegex = /^[0-9]{12}$/;
    if (!aadharRegex.test(aadharNo)) {
      Alert.alert("Error", "Please enter a valid 12-digit Aadhar card number.");
      return;
    }

    // Check if gender is selected
    if (!gender) {
      Alert.alert("Error", "Please select a gender.");
      return;
    }

    // Your registration logic goes here
    console.log("Registration data:", {
      firstName,
      middleName,
      lastName,
      gender,
      age,
      email,
      mobileNumber,
      address,
      city,
      state,
      country,
      pin,
      aadharNo,
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Personal Details</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name *"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Middle Name *"
          value={middleName}
          onChangeText={setMiddleName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name *"
          value={lastName}
          onChangeText={setLastName}
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Gender *" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Age *"
          keyboardType="numeric"
          value={age}
          onChangeText={setAge}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Id *"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Mobile Number *"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />

        <Text style={styles.title}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Address *"
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="City *"
          value={city}
          onChangeText={setCity}
        />
        <TextInput
          style={styles.input}
          placeholder="State *"
          value={state}
          onChangeText={setState}
        />
        <TextInput
          style={styles.input}
          placeholder="Country *"
          value={country}
          onChangeText={setCountry}
        />
        <TextInput
          style={styles.input}
          placeholder="Pin Code *"
          keyboardType="numeric"
          value={pin}
          onChangeText={setPin}
        />

        <Text style={styles.title}>Security Purpose</Text>
        <TextInput
          style={styles.input}
          placeholder="Aadhar No *"
          keyboardType="numeric"
          value={aadharNo}
          onChangeText={setAadharNo}
        />

        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegister}
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;

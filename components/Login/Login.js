// Login.js
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./LoginStyle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      const rules = [
        "At least 6 characters",
        "At least one uppercase letter",
        "At least one lowercase letter",
        "At least one digit",
        "At least one special character (@, $, !, %, *, ?, &)",
      ];
      alert(
        "Password does not meet the following criteria:\n\n• " +
          rules.join("\n• ")
      );
      return;
    }

    // Proceed with login logic
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSignUpPress = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./tea-leaf-image.png")}
        style={styles.teaLeafImage}
        resizeMode="contain"
        accessibilityLabel="Tea Leaf Image"
      />
      <View style={styles.formContainer}>
        <TextInput
          textContentType="emailAddress"
          style={styles.input}
          placeholder="Email Id"
          placeholderTextColor="green"
          keyboardType="email-address"
          accessibilityLabel="Email Input"
          accessibilityHint="Enter your email address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="green"
          secureTextEntry
          accessibilityLabel="Password Input"
          accessibilityHint="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.loginButton}
          accessibilityLabel="Login Button"
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signupText}>
        Don't have an account yet?{" "}
        <Text style={styles.signupTextLink} onPress={handleSignUpPress}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

export default Login;

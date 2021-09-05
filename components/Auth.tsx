import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Title, Button, TextInput, Subheading } from "react-native-paper";
import { useDispatch } from "react-redux";
import { loginOrCreateAccount } from "../features";

type Props = {};

export const Auth: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleGetStarted = useCallback(async () => {
    await dispatch(
      loginOrCreateAccount({
        username: "sicklysentiment",
        password: "password",
      })
    );

    navigation.navigate("Root");
  }, []);

  return (
    <View style={styles.container}>
      <Title>Login</Title>
      <Subheading>
        If you don't have an account, one will be created with the given
        username and password
      </Subheading>
      <TextInput label="Username" />
      <TextInput label="Password" textContentType="password" />
      <Button onPress={handleGetStarted} mode="outlined">
        Get Started
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    paddingTop: 24,
    display: "flex",
    flexDirection: "column",
  },
});

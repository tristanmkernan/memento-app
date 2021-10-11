import React, { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Surface, Title, Button, Subheading } from "react-native-paper";
import { useDispatch } from "react-redux";

import { logout } from "../features";
import { AppDispatch } from "../store";

import { ChangePasswordForm } from "./ChangePasswordForm";

type Props = {};

export const Settings: React.FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Title>Account</Title>

        <Surface style={styles.section}>
          <Subheading>Change Password</Subheading>
          <ChangePasswordForm />
        </Surface>

        <Surface style={styles.section}>
          <Subheading>Logout</Subheading>
          <Button
            style={styles.logoutAction}
            mode="outlined"
            onPress={handleLogout}
          >
            Logout
          </Button>
        </Surface>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  column: {
    flex: 1,
    alignItems: "stretch",
    paddingTop: 24,
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "column",
    maxWidth: 480,
  },
  section: {
    marginVertical: 8,
    padding: 16,
    borderRadius: 8,
  },
  logoutAction: {
    marginTop: 8,
  },
});

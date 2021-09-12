import React, { useCallback } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Title, Button } from "react-native-paper";
import { useDispatch } from "react-redux";

import { logout } from "../features";
import { AppDispatch } from "../store";

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
        <Button mode="outlined" onPress={handleLogout}>
          Logout
        </Button>
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
  field: {
    marginVertical: 8,
  },
  getStartedAction: {
    marginTop: 8,
  },
  notice: {
    marginVertical: 8,
  },
});

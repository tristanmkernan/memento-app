import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { List, Title, Button, TextInput } from "react-native-paper";

type Props = {};

export const MementoCreate: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Title>Create Memento</Title>
      <List.Section>
        <List.Accordion title="Category">
          <TextInput label="Search" />
          {/* TODO search results */}
          <Button mode="outlined">New Category</Button>
        </List.Accordion>
        <List.Accordion title="Info">
          <TextInput label="Notes" />
          <TextInput label="Location" />
        </List.Accordion>
        <List.Accordion title="Other">
          <TextInput label="Date" />
        </List.Accordion>
      </List.Section>
      <Button mode="outlined">Create</Button>
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

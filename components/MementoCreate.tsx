import { Formik } from "formik";
import React, { useCallback } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { List, Title, Button, TextInput } from "react-native-paper";

type Props = {};

export const MementoCreate: React.FC<Props> = () => {
  const handleSubmit = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <Title>Create Memento</Title>
      <Formik
        initialValues={{ notes: "", location: "" }}
        validationSchema={null}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, values, handleSubmit }) => (
          <>
            <List.Section>
              <List.Accordion title="Category">
                <TextInput label="Search" />
                {/* TODO search results */}
                <Button mode="outlined">New Category</Button>
              </List.Accordion>
              <List.Accordion title="Info">
                <TextInput
                  label="Notes"
                  onChangeText={handleChange("notes")}
                  onBlur={handleBlur("notes")}
                  value={values.notes}
                />
                <TextInput
                  label="Location"
                  onChangeText={handleChange("location")}
                  onBlur={handleBlur("location")}
                  value={values.location}
                />
              </List.Accordion>
              <List.Accordion title="Other">
                <TextInput disabled label="Date" />
              </List.Accordion>
            </List.Section>

            <Button onPress={handleSubmit} mode="outlined">
              Create
            </Button>
          </>
        )}
      </Formik>
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

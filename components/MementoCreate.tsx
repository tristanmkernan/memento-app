import React, { useCallback } from "react";
import { Formik } from "formik";
import { ScrollView, View } from "react-native";
import { StyleSheet } from "react-native";
import { HelperText, List, Title, Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { MementoCreateCategoryField } from "./MementoCreateCategoryField";

import { createMemento } from "../features";
import { AppDispatch } from "../store";

type Props = {};

export const MementoCreate: React.FC<Props> = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = useCallback(async (values) => {
    await dispatch(createMemento(values));
    navigation.navigate("MementoHistory");
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.column}>
          <Title>Create Memento</Title>
          <Formik
            initialValues={{ notes: "", location: "" }}
            validationSchema={null}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <List.Section>
                  <List.Accordion title="Category">
                    <MementoCreateCategoryField />
                  </List.Accordion>
                  <List.Accordion title="Info">
                    <View style={styles.innerAccordion}>
                      <TextInput
                        style={styles.field}
                        label="Location"
                        mode="outlined"
                        onChangeText={handleChange("location")}
                        onBlur={handleBlur("location")}
                        value={values.location}
                        error={!!errors.location && !!touched.location}
                      />
                      <HelperText
                        type="error"
                        visible={!!errors.location && !!touched.location}
                      >
                        {errors.location}
                      </HelperText>
                      <TextInput
                        style={styles.field}
                        label="Notes"
                        mode="outlined"
                        multiline={true}
                        numberOfLines={4}
                        onChangeText={handleChange("notes")}
                        onBlur={handleBlur("notes")}
                        value={values.notes}
                        error={!!errors.notes && !!touched.notes}
                      />
                      <HelperText
                        type="error"
                        visible={!!errors.notes && !!touched.notes}
                      >
                        {errors.notes}
                      </HelperText>
                    </View>
                  </List.Accordion>
                </List.Section>

                <Button onPress={handleSubmit} mode="outlined">
                  Create
                </Button>
              </>
            )}
          </Formik>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    alignItems: "stretch",
    paddingTop: 24,
    paddingHorizontal: 24,
    display: "flex",
    flexDirection: "column",
    maxWidth: 480,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  innerAccordion: {},
  field: {
    marginVertical: 8,
  },
  createCategory: {
    marginVertical: 8,
  },
});

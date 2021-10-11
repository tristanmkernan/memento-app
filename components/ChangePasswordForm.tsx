import React, { useCallback } from "react";
import { Formik } from "formik";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { HelperText, Button, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import * as yup from "yup";

import { changePassword } from "../features";
import { AppDispatch } from "../store";

const validationSchema = yup.object().shape({
  currentPassword: yup.string().required().min(6).max(32),
  newPassword: yup.string().required().min(6).max(32),
});

type Props = {};

export const ChangePasswordForm: React.FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = useCallback(async (values, formikBag) => {
    await dispatch(changePassword(values));
  }, []);

  return (
    <View style={{}}>
      <Formik
        initialValues={{ currentPassword: "", newPassword: "" }}
        validationSchema={validationSchema}
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
            <TextInput
              style={styles.field}
              label="Current Password"
              mode="outlined"
              secureTextEntry
              onChangeText={handleChange("currentPassword")}
              onBlur={handleBlur("currentPassword")}
              value={values.currentPassword}
              error={!!errors.currentPassword && !!touched.currentPassword}
            />
            <HelperText
              type="error"
              visible={!!errors.currentPassword && !!touched.currentPassword}
            >
              {errors.currentPassword}
            </HelperText>
            <TextInput
              style={styles.field}
              label="New Password"
              mode="outlined"
              secureTextEntry
              onChangeText={handleChange("newPassword")}
              onBlur={handleBlur("newPassword")}
              value={values.newPassword}
              error={!!errors.newPassword && !!touched.newPassword}
            />
            <HelperText
              type="error"
              visible={!!errors.newPassword && !!touched.newPassword}
            >
              {errors.newPassword}
            </HelperText>

            <Button onPress={handleSubmit} mode="outlined">
              Submit
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    marginVertical: 8,
  },
});

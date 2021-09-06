import { useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import {
  Title,
  Button,
  TextInput,
  Paragraph,
  HelperText,
} from "react-native-paper";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";

import { loginOrCreateAccount } from "../features";
import { AppDispatch } from "../store";

const validationSchema = yup.object().shape({
  username: yup.string().required().max(120),
  password: yup.string().required().min(6),
});

type Props = {};

export const Auth: React.FC<Props> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();

  const handleGetStarted = useCallback(async (values) => {
    await dispatch(
      loginOrCreateAccount({
        username: values.username,
        password: values.password,
      })
    ).unwrap();

    navigation.navigate("Root");
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Title>Login</Title>
        <Paragraph style={styles.notice}>
          If you don't have an account, one will be created with the given
          username and password
        </Paragraph>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleGetStarted}
        >
          {({
            handleChange,
            handleBlur,
            values,
            handleSubmit,
            isValid,
            errors,
            touched,
            isSubmitting,
          }) => (
            <>
              <TextInput
                style={styles.field}
                label="Username"
                mode="outlined"
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                error={!!errors.username && !!touched.username}
              />
              <HelperText
                type="error"
                visible={!!errors.username && !!touched.username}
              >
                {errors.username}
              </HelperText>
              <TextInput
                style={styles.field}
                label="Password"
                mode="outlined"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                error={!!errors.password && !!touched.password}
              />
              <HelperText
                type="error"
                visible={!!errors.password && !!touched.password}
              >
                {errors.password}
              </HelperText>
              <Button
                style={styles.getStartedAction}
                disabled={!isValid || isSubmitting}
                loading={isSubmitting}
                onPress={handleSubmit}
                mode="outlined"
              >
                Get Started
              </Button>
            </>
          )}
        </Formik>
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

/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "../screens/NotFoundScreen";
import MementoHistoryScreen from "../screens/MementoHistoryScreen";
import MementoCategoryScreen from "../screens/MementoCategoryScreen";
import SettingsScreen from "../screens/SettingsScreen";
import {
  MementoStackParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import MementoCreateScreen from "../screens/MementoCreateScreen";
import AuthScreen from "../screens/AuthScreen";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { NavigationBar } from "../components/NavigationBar";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const isLoggedIn = useSelector((store: RootState) => store.auth.is_logged_in);

  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NotFound"
            component={NotFoundScreen}
            options={{ title: "Oops!" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Auth"
            component={AuthScreen}
            options={{ title: "Mementos" }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="MementoStack"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
        header: (props) => <NavigationBar {...props} />,
      }}
    >
      <BottomTab.Screen
        name="MementoStack"
        component={MementoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="note-multiple" color={color} />
          ),
        }}
        listeners={({ navigation, route }) => ({
          // https://github.com/react-navigation/react-navigation/issues/8583
          // TODO SO CLOSE
          tabPress: () => {
            navigation.navigate("MementoHistory");
          },
        })}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="account" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const MementoStack = createNativeStackNavigator<MementoStackParamList>();

function MementoNavigator() {
  return (
    <MementoStack.Navigator screenOptions={{ headerShown: false }}>
      <MementoStack.Screen
        name="MementoHistory"
        component={MementoHistoryScreen}
      />
      <MementoStack.Screen
        name="MementoCategory"
        component={MementoCategoryScreen}
      />
      <MementoStack.Screen
        name="MementoCreate"
        component={MementoCreateScreen}
      />
    </MementoStack.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />
  );
}

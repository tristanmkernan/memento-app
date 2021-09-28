import React from "react";

import { Appbar } from "react-native-paper";

export const NavigationBar: React.FC = ({ navigation, previous, options }) => {
  const title = options.title ?? "Mementos";

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

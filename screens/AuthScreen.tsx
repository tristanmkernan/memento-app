import * as React from "react";

import { Auth } from "../components";
import { RootStackScreenProps, RootTabScreenProps } from "../types";

export default function AuthScreen({
  navigation,
  route,
}: RootStackScreenProps<"Auth">) {
  return <Auth />;
}

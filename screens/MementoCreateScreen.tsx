import * as React from "react";

import { MementoCreate } from "../components";
import { RootStackScreenProps, RootTabScreenProps } from "../types";

export default function MementoCreateScreen({
  navigation,
  route,
}: RootStackScreenProps<"MementoCreate">) {
  return <MementoCreate />;
}

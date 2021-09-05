import * as React from "react";

import { MementoItem } from "../components";
import { RootStackScreenProps, RootTabScreenProps } from "../types";

export default function MementoItemScreen({
  navigation,
  route,
}: RootStackScreenProps<"MementoItem">) {
  return <MementoItem mementoId={route.params?.mementoId} />;
}

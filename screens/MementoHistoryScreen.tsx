import * as React from "react";

import { MementoHistory } from "../components";

import { RootTabScreenProps } from "../types";

export default function MementoHistoryScreen({
  navigation,
}: RootTabScreenProps<"MementoHistory">) {
  return <MementoHistory />;
}

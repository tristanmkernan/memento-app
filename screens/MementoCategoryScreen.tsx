import * as React from "react";

import { MementoCategory } from "../components/MementoCategory";
import { RootStackScreenProps, RootTabScreenProps } from "../types";

export default function MementoCategoryScreen({
  navigation,
  route,
}: RootStackScreenProps<"MementoCategory">) {
  return <MementoCategory categoryId={route.params?.categoryId} />;
}

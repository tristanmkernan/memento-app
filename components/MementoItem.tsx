import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Title, Chip, Paragraph } from "react-native-paper";
import { useSelector } from "react-redux";

type Props = {
  mementoId: string;
};

export const MementoItem: React.FC<Props> = ({ mementoId }) => {
  const memento = useSelector((store) => store.mementos.entities[mementoId]);

  return (
    <View style={styles.container}>
      <Title>{memento?.category?.name}</Title>
      <Chip>{memento?.created_at?.toLocaleString()}</Chip>
      <Paragraph>{memento?.location}</Paragraph>
      <Paragraph>{memento?.notes}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    paddingTop: 24,
    display: "flex",
    flexDirection: "column",
  },
});

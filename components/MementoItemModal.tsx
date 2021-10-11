import React, { useCallback } from "react";
import { DateTime } from "luxon";
import { View, StyleSheet } from "react-native";
import {
  Paragraph,
  Dialog,
  Portal,
  Button,
  Subheading,
  Divider,
} from "react-native-paper";
import { isNil } from "lodash";

import { Memento } from "../models";
import { useNavigation } from "@react-navigation/native";

type Props = {
  memento: Memento | null;
  onDismiss: () => void;
  showActions?: boolean;
};

export const MementoItemModal: React.FC<Props> = ({
  memento,
  onDismiss,
  showActions = true,
}) => {
  const navigation = useNavigation();

  const handleViewHistory = useCallback(() => {
    onDismiss();

    navigation.navigate("Root", {
      screen: "MementoStack",
      params: {
        screen: "MementoCategory",
        params: {
          categoryId: memento?.category?.id,
        },
      },
    });
  }, [memento?.id]);

  return (
    <Portal>
      <Dialog
        style={styles.modal}
        visible={!isNil(memento)}
        onDismiss={onDismiss}
      >
        <Dialog.Title>{memento?.category?.name}</Dialog.Title>
        <Dialog.Content>
          <View style={styles.section}>
            <Subheading>Notes</Subheading>
            <Paragraph>{memento?.notes}</Paragraph>
          </View>

          <Divider />
          <View style={styles.section}>
            <Subheading>Timestamp</Subheading>
            <Paragraph>
              {DateTime.fromISO(memento?.created_at).toLocaleString()}
            </Paragraph>
          </View>
          <Divider />
          <View style={styles.section}>
            <Subheading>Location</Subheading>
            <Paragraph>{memento?.location}</Paragraph>
          </View>
        </Dialog.Content>
        {showActions && (
          <Dialog.Actions>
            <Button onPress={handleViewHistory}>
              View {memento?.category?.name} history
            </Button>
          </Dialog.Actions>
        )}
      </Dialog>
    </Portal>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: 8,
  },
  modal: {
    alignSelf: "center",
    maxWidth: 640,
    minWidth: 320,
    paddingHorizontal: 16,
  },
});

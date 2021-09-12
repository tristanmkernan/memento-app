import React, { useCallback, useEffect } from "react";
import { DateTime } from "luxon";
import { Text, ListRenderItem, FlatList, View, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { Card, Chip, List, Paragraph, Avatar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { get } from "lodash";

import { AppDispatch, RootState } from "../store";
import { Memento } from "../models";
import { fetchCategoryHistory } from "../features";

type Props = {
  mementoId: string;
};

export const MementoItem: React.FC<Props> = ({ mementoId }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();

  const memento = useSelector(
    (store: RootState) => store.mementos.entities[mementoId]
  );
  const categoryHistory = useSelector((store: RootState) =>
    get(store.mementoCategoryHistory.entities, memento?.category?.id, [])
  );

  useEffect(() => {
    dispatch(fetchCategoryHistory(memento?.category?.id));
  }, [memento?.category?.id]);

  const MementoHistoryListItem: ListRenderItem<Memento> = useCallback(
    ({ item }) => {
      return (
        <List.Item
          title={item.category.name}
          description={(props) => (
            <View {...props}>
              <Paragraph numberOfLines={1} ellipsizeMode="tail">
                {item.notes}
              </Paragraph>
              <View style={{ flexDirection: "row" }}>
                <Chip icon="calendar">
                  <Text>
                    {DateTime.fromISO(item.created_at).toLocaleString()}
                  </Text>
                </Chip>

                <Chip style={{ marginLeft: 8 }} icon="map-marker">
                  <Text>{item.location}</Text>
                </Chip>
              </View>
            </View>
          )}
          onPress={() =>
            navigation.navigate("MementoItem", { mementoId: item.id })
          }
          left={(props) => <List.Icon {...props} icon="note" />}
        />
      );
    },
    []
  );

  const subtitle = `${memento?.location} - ${DateTime.fromISO(
    memento?.created_at
  ).toLocaleString()}`;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Card style={styles.card}>
          <Card.Title
            title={memento?.category?.name}
            subtitle={subtitle}
            left={(props) => <Avatar.Icon {...props} icon="note" />}
          />
          <Card.Content>
            <Paragraph>{memento?.notes}</Paragraph>
          </Card.Content>
        </Card>
        <Card style={[styles.card]}>
          <Card.Title
            title="Other Entries"
            left={(props) => <Avatar.Icon {...props} icon="note-multiple" />}
          />
          <Card.Content>
            <FlatList
              data={categoryHistory ?? []}
              renderItem={MementoHistoryListItem}
              keyExtractor={(item) => item.id}
            />
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 24,
    display: "flex",
    flexDirection: "column",
  },
  card: {
    maxWidth: 360,
    minWidth: 240,
    marginVertical: 8,
  },
});
